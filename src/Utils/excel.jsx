import dayjs from 'dayjs';
const XLSX = require("xlsx");
// import XLSX from 'xlsx';

export const downloadExcel = (salesData, startDate, endDate) => {
    // Helper to format date
    const formatDate = (dateString) => dayjs(dateString).format("DD-MM-YYYY");

    // Group sales data by date
    const salesByDate = salesData.reduce((acc, order) => {
        const date = formatDate(order.date);
        if (!acc[date]) acc[date] = [];
        acc[date].push(order);
        return acc;
    }, {});

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    Object.keys(salesByDate).forEach(date => {
        // Prepare data rows for each date
        const dataRows = salesByDate[date].flatMap(order =>
            order.items.map((item, index) => ({
                "Contact Name": index === 0 ? order.contactName : "",
                "Sales Order Number": index === 0 ? order.salesOrderNumber : "",
                "Sale Type": index === 0 ? order.saleType : "",
                "Status": index === 0 ? order.status : "",
                "Invoice Status": index === 0 ? order.invoiceStatus : "",
                "Date": index === 0 ? formatDate(order.date) : "",
                "Amount": index === 0 ? order.amount : "",
                "Item Name": item.itemDetails.name,
                "Rate": item.rate,
                "Quantity": item.quantity,
                "Unit": item.unit,
                "Item Total": item.itemTotal
            }))
        );

        // Create a worksheet for each date
        const worksheet = XLSX.utils.json_to_sheet(dataRows);
        XLSX.utils.book_append_sheet(workbook, worksheet, date);
    });

    // Write workbook to file
    XLSX.writeFile(workbook, `${startDate}-${endDate}_sales.xlsx`);

    console.log("Excel file has been created successfully.");
}
