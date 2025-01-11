import { useEffect, useState } from "react";
import { DatePicker, Descriptions, message, Select, Table } from "antd";
import { addCommas, checkAccess, handleCatch, isSameDay, screenHeight } from "../../common-utils";
import CommonHeader from "../../Components/CommonHeader";
import { ColFlex, RowFlex, StyledDiv, StyledText } from "../../Styled/Layout";
import { statusDesign } from "../../Components/TableColumns";
import { fetchAllContacts, fetchAllItems, fetchSalesOrder, getInvoicePdf, updateSalesOrderStatus } from "../../api/sales";
import AddSalesOrder from "../../Components/AddSalesOrderModal";
import { StyledButton } from "../../Styled/Button";
import { ArrowsClockwise, CaretCircleLeft, CaretCircleRight, DownloadSimple, Plus } from "@phosphor-icons/react";
import EditSalesOrder from "../../Components/EditSalesOrderModal";
import { PencilSimple } from "@phosphor-icons/react";
import { Tag } from "antd";
import dayjs from 'dayjs';
import { downloadExcel } from "../../Utils/excel";
import { fetchAllAgents } from "../../api";
import { useNavigate } from "react-router-dom";

const SaleOrderStatus = [
  {value: 'PENDING', label: <StyledText ta="left" fs="14px" fw="600" c={statusDesign['PENDING']}>Pending</StyledText>},
  {value: 'PACKED', label: <StyledText ta="left" fs="14px" fw="600" c={statusDesign['PACKED']}>Packed</StyledText>},
  {value: 'SENT', label: <StyledText ta="left" fs="14px" fw="600" c={statusDesign['SENT']}>Sent</StyledText>},
  {value: 'DONE', label: <StyledText ta="left" fs="14px" fw="600" c={statusDesign['DONE']}>Done</StyledText>},
  {value: 'CANCELLED', label: <StyledText ta="left" fs="14px" fw="600" c={statusDesign['CANCELLED']}>Cancelled</StyledText>}
];

const SaleOrder = () => {
  const navigate = useNavigate();
  const [saleOrderData, setSaleOrderData] = useState([]);
  const [filteredSaleOrders, setFilteredSaleOrders] = useState([]);
  const [addSaleModalOpen, setAddSaleModalOpen] = useState(false);
  const [editSaleModalOpen, setEditSaleModalOpen] = useState(false);
  const [selectedSaleOrder, setSelectedSaleOrder] = useState(null);
  const [allContacts, setAllContacts] = useState([]);
  const [itemNameToIdMap, setItemNameToIdMap] = useState(new Map());
  const [allItems, setAllItems] = useState([]);
  const [allAgents, setAllAgents] = useState([]);
  const [date, setDate] = useState([dayjs(), dayjs()]);
  const [isdateChangeBtnVisible, setIsdateChangeBtnVisible] = useState(true);

  //filters
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  //access
  const role = window.localStorage.getItem('role');
  const canEditPreviousOrder = role && ["admin", "accountant"].includes(role);

  const handleStatusChange = async (id, status, newStatus) => {
    try {
      // Optimistically update the table
      const updatedData = filteredSaleOrders.map((item) => 
        item.id === id ? { ...item, status: newStatus } : item
      );
      setFilteredSaleOrders(updatedData);
  
      // Send the update to the backend
      const response = await updateSalesOrderStatus(id, { status: newStatus });
    } catch (error) {
      handleCatch(error);
  
      // Revert the optimistic update if the API call fails
      const originalData = filteredSaleOrders.map((item) =>
        item.id === id ? { ...item, status: status } : item
      );
      setFilteredSaleOrders(originalData);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'contactName',
      filteredValue: selectedContact && [selectedContact],
      onFilter: (value, record) => record.contactId == value
    }
  ];

  if (checkAccess('EDIT_SALE_ORDER')) {
    columns.push({
      title: 'Status',
      dataIndex: 'status',
      filteredValue: selectedStatus && [selectedStatus],
      onFilter: (value, record) => record.status == value,
      render: (data, record) => <Select
          value={data}
          options={SaleOrderStatus}
          style={{ width: 'fit-content'}}
          popupMatchSelectWidth={false}
          onClick={(e) => e.stopPropagation()}
          onChange={(newStatus) => handleStatusChange(record.id, data, newStatus)}
      />
    },{
      key: 'action',
      render: (_, rowData) => <PencilSimple size={18} color="rgba(0, 0, 0, 0.58)" weight="fill" onClick={(e) => {
        e.stopPropagation();
        if(!isSameDay(new Date(rowData.date), new Date()) && !canEditPreviousOrder) {
          message.error("You don't have permission");
          return;
        }
        setSelectedSaleOrder(rowData);
        setEditSaleModalOpen(true);
      }} />,
      width: 1
    })
  } else {
    columns.push({
      title: 'Status',
      dataIndex:'status',
      render: (data) => <Tag color={statusDesign[data]}>
        {data.toLowerCase()}
      </Tag>
    })
  }

  const itemsTableColumn = [
    {
      title: 'Item Name',
      dataIndex: 'itemId',
      render: (data) => <>{allItems.find((e) => e.value == data).label}</>
    },
    {
      title: 'Qtn',
      dataIndex: 'quantity',
    },
    {
      title: 'unit',
      dataIndex: 'unit',
    },
    {
      title: 'rate',
      dataIndex: 'rate',
    }
  ];

  const handleDownload = () => {
    if(!filteredSaleOrders?.length){
      message.error("No Sale Order Found!!");
      return;
    }
    downloadExcel(filteredSaleOrders, date[0].format("DD/MM/YYYY"), date[1].format("DD/MM/YYYY"))
  }

  const HeaderContent = () => {
    return (
      <RowFlex m="0" gap="20px">
        <StyledButton h="32px" shape="circle" icon={<Plus size={18} color="#6a8099" weight="bold" />} onClick={() => setAddSaleModalOpen(true)} style={{margin: "auto"}} />
        <DownloadSimple size={24} color="#fff" style={{ alignSelf: "end", margin: "auto" }} onClick={handleDownload} />
      </RowFlex>
    )
  }

  const getAllContacts = async () => {
    try {
      const res = await fetchAllContacts();
      if (res.status == 200) {
        const contactForSelect = res.data?.map((contact) => {
          return {
            value: contact.id,
            label: contact.displayName || "-"
          }
        })
        setAllContacts(contactForSelect);
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  const getAllItems = async () => {
    try {
      const res = await fetchAllItems();
      if (res.status == 200) {
        const itemsMap = new Map();
        const itemsForSelect = res.data?.map((item) => {
          if (!itemsMap.has(item.id)) itemsMap.set(item.id, item.name);
          return {
            value: item.id,
            label: item.name
          }
        })
        setAllItems(itemsForSelect);
        setItemNameToIdMap(itemsMap);
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  const getAllAgents = async () => {
    try {
      const res = await fetchAllAgents();
      if (res.status == 200) {
        const AgentsForSelect = res.data?.map((agent) => {
          return {
            value: agent.id,
            label: agent.displayName
          }
        })
        setAllAgents(AgentsForSelect);
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  const fetchOrders = async () => {
    try {
      const res = await fetchSalesOrder({
        startDate: date[0].startOf('day').valueOf(),
        endDate: date[1].endOf('day').valueOf()
      });
      if (res.status == 200) {
        setSaleOrderData(res.data);
        setFilteredSaleOrders(res.data);
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  const onDateChange = (_, dates) => {
    const dateFunc = dates.map(date => dayjs(date, "DD/MM/YYYY"))
    setDate(dateFunc);
  }
  const updateDate = (days) => {
    const updatedDate = date[0].add(days, 'day');
    setDate([updatedDate, updatedDate]);
  };

  const ItemTable = (props) => {
    return (
      <Table
        bordered
        style={{ width: '100%', marginLeft: 0 }}
        size="middle"
        pagination={{
          position: ["none", "bottomCenter"],
          pageSize: 5
        }}
        columns={itemsTableColumn}
        dataSource={props.itemData || []}
      />
    )
  }

  const clearFilter = () => {
    setSelectedContact(null);
    setSelectedStatus(null);
  }

  const downloadInvoice = async (saleOrderId) => {
    try {
      const response = await getInvoicePdf({saleOrderId});
      if(response.status === 200) {
        const link = document.createElement("a");
        link.href = response.data.signedUrl;
        link.download = "invoice.pdf";
        link.click();
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  useEffect(() => {
    // Toggle date change button visibility based on date comparison
    setIsdateChangeBtnVisible(date[0].isSame(date[1], 'day'));

    // fetch orders
    fetchOrders();
  }, [date]);

  useEffect(() => {
    getAllContacts();
    getAllItems();
    getAllAgents();
  }, []);

  return (
    <ColFlex ai="center" minH={false ? `${screenHeight}` : "100vh"} maxW="500px" w="100%" bgc="#fff" style={{ position: "relative" }}>
      <CommonHeader title="Sales" bgc="seagreen" onBack={()=>navigate(-1)} rightContent={checkAccess('EDIT_SALE_ORDER') ? <HeaderContent /> : null} />
      <ColFlex m="0" w="100%" p="20px" gap="20px">
        {
          checkAccess('EDIT_SALE_ORDER') && 
          <RowFlex w="100%" m="0" gap="20px">
            <CaretCircleLeft size={32} color="#8c8c8c" display={isdateChangeBtnVisible ? "block" : "none"} onClick={()=>updateDate(-1)} />
            <DatePicker.RangePicker value={date} style={{ alignSelf: "end", width: "100%" }} onChange={onDateChange} format="DD/MM/YYYY" popupClassName="yolup" />
            <CaretCircleRight size={32} color="#8c8c8c" display={isdateChangeBtnVisible ? "block" : "none"} onClick={()=>updateDate(1)} />
          </RowFlex>
        }
        <RowFlex w="100%" m="0" gap="20px">
          <Select
              showSearch
              value={selectedContact}
              placeholder="customers"
              optionFilterProp="label"
              popupMatchSelectWidth={false}
              filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={allContacts}
              style={{ minWidth: '40%', width: '100%' }}
              onChange={(e) => setSelectedContact(e)}
          />
          <Select
              value={selectedStatus}
              options={SaleOrderStatus}
              placeholder="status"
              style={{ width: 'fit-content'}}
              popupMatchSelectWidth={false}
              onChange={(newStatus) => setSelectedStatus(newStatus)}
          />
          <ArrowsClockwise size={32} weight="bold" color="#00000070" onClick={clearFilter} />
        </RowFlex>
        <Table
          style={{ width: '100%' }}
          size="middle"
          pagination={{
            position: ["none", "bottomCenter"],
            pageSize: 15
          }}
          columns={columns}
          dataSource={filteredSaleOrders || []}
          expandable={{
            expandIcon: () => null,
            expandIconColumnIndex: -1,
            expandRowByClick: true,
            expandedRowRender: (record) => <StyledDiv id="1234" w="100%">
              <ItemTable itemData={record.items} />
              <Descriptions
                title=""
                size="small"
                style={{marginBottom: "10px"}}
                layout="vertical"
                bordered
                column={{ xs: 2 }}
                items={[
                  {
                    key: '1',
                    label: 'Agent',
                    children: record.agentName,
                  },{
                    key: '2',
                    label: 'Containers',
                    children: record.containers?.map((e)=><>{e.type} : {e.quantity}<br/></>),
                  },
                  {
                    key: '3',
                    label: 'Total',
                    children: `₹ ${addCommas(record.items.reduce((curr, acc) => {
                      return curr + (acc.itemTotal || 0);
                    }, 0))}`,
                  },
                  // {
                  //   key: '4',
                  //   label: 'Invoice Pdf',
                  //   children: <span style={{color: 'blue', textDecoration: 'underline'}} onClick={()=>downloadInvoice(record.id)}>Download</span>,
                  // }
                ]}
              />
            </StyledDiv>
          }}
          rowKey={(_, i) => i}
        />
      </ColFlex>
      <AddSalesOrder
        open={addSaleModalOpen}
        onClose={() => setAddSaleModalOpen(false)}
        allContacts={allContacts}
        getAllContacts={getAllContacts}
        allItems={allItems}
        getAllItems={getAllItems}
        allAgents={allAgents}
        fetchOrders={fetchOrders}
      />
      <EditSalesOrder
        open={editSaleModalOpen}
        onClose={() => setEditSaleModalOpen(false)}
        saleOrder={selectedSaleOrder}
        allContacts={allContacts}
        allItems={allItems}
        allAgents={allAgents}
        itemNameToIdMap={itemNameToIdMap}
      />
    </ColFlex>
  );
};

export default SaleOrder;
