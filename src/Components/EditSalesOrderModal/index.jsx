import { useEffect, useState } from "react";
import { Button, DatePicker, message, Modal, Radio, Select, Table } from "antd";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import dayjs from 'dayjs';
import { updateSaleOrder } from "../../api/sales";
import { handleCatch, handleTableChange } from "../../common-utils";
import { ColFlex, RowFlex, StyledText } from "../../Styled/Layout";
import { ContainerTableEditableCell, ItemTableEditableCell } from "./EditableCell";
import { ContainerTableEditableRow, ItemTableEditableRow } from "./EditableRow";
import { StyledPillButton } from "../../Styled/Button";

const EditSalesOrder = (props) => {
    const { open, onClose, saleOrder, allContacts, allItems, allAgents, itemNameToIdMap } = props;
    const [contactId, setContactId] = useState(null);
    const [agentId, setAgentId] = useState(null);
    const [lineItems, setLineItems] = useState([]);
    const [container, setContainers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [date, setDate] = useState(null);
    const [saleType, setSaleType] = useState();
    const pageSize = 10;

    const onFinish = async () => {
        if (!saleOrder) {
            message.error('Sale order not found');
            return;
        }
        setLoading(true);
        const saleOrderData = {};
        if (contactId?.value && contactId.value != saleOrder.contactId) {
            saleOrderData.contactId = contactId.value;
        }
        if (saleType != saleOrder.saleType) {
            saleOrderData.saleType = saleType;
        }
        if(saleType == "interState" && agentId?.value && agentId.value != saleOrder.agentId) {
            saleOrderData.agentId = agentId.value;
        } else if(saleType == "local" && saleOrder.agentId != null) {
            saleOrderData.agentId = null;
        }
        if (!dayjs(saleOrder.date).isSame(date, 'day')) {
            saleOrderData.date = date.valueOf();
        }
        try {
            await updateSaleOrder(saleOrder.id, {
                saleOrder: saleOrderData,
                lineItems,
                containers: container
            });
            message.success('sale order updated successfully');
        } catch (err) {
            handleCatch(err);
            onClose();
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = () => {
        const newData = {
            "id": lineItems.length,
            "itemId": 1,
            "itemTotal": 0,
            "quantity": "",
            "rate": "",
            "unit": "kg",
            "itemDetails": {
                "name": "broccoli"
            }
        };
        const updatedLineItems = [...lineItems, newData];
        setLineItems(updatedLineItems);

        if (Math.ceil(updatedLineItems.length / pageSize) > 1) {
            setCurrentPage(Math.ceil(updatedLineItems.length / pageSize));
        }
    };

    const handleDelete = (id) => {
        if (lineItems.length <= 1) {
            message.error('At least one item should be present');
            return;
        }
        const newData = lineItems.filter((item) => item.id !== id);
        setLineItems(newData);
    };

    const handleSave = (row) => {
        const newData = [...lineItems];
        const index = newData.findIndex((item) => row.id === item.id);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setLineItems(newData);
    };

    const handleContainerAdd = () => {
        const newData = {
            "id": container.length,
            "type": "whiteBox",
            "quantity": 1
        };
        const updatedContainers = [...container, newData];
        setContainers(updatedContainers);
    };

    const handleContainerDelete = (id) => {
        const newData = container.filter((item) => item.id !== id);
        setContainers(newData);
    };

    const handleContainerSave = (row) => {
        const newData = [...container];
        const index = newData.findIndex((item) => row.id === item.id);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setContainers(newData);
    };

    const itemsTableColumn = [
        {
            title: 'Item Name',
            dataIndex: 'itemId',
            render: (data) => <>{itemNameToIdMap.get(data)}</>
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
    const containerTableColumn = [
        {
            title: 'type',
            dataIndex: 'type',
            editable: true,
            onCell: (record) => ({
                record,
                editable: true,
                dataIndex: 'type',
                title: 'type',
                handleSave: handleContainerSave
            }),
        },
        {
            title: 'Qtn',
            dataIndex: 'quantity',
            editable: true,
            onCell: (record) => ({
                record,
                editable: true,
                dataIndex: 'quantity',
                title: 'Qtn',
                handleSave: handleContainerSave
            }),
        },
        {
            width: 1,
            render: (_, record, i) =>
                lineItems.length >= 1 ? (
                    <MinusCircle size={24} color="rgb(140,140,140)" onClick={() => handleContainerDelete(record.id)} />
                ) : null,
        }
    ];

    const columns = [...(itemsTableColumn.map((col) => {
        return {
            ...col,
            editable: true,
            onCell: (record) => ({
                record,
                editable: true,
                dataIndex: col.dataIndex,
                title: col.title,
                allItems,
                itemNameToIdMap,
                handleSave,
            }),
        };
    })),
    {
        width: 1,
        render: (_, record) =>
            lineItems.length >= 1 ? (
                <MinusCircle size={24} color="rgb(140,140,140)" onClick={() => handleDelete(record.id)} />
            ) : null,
    }
    ];

    useEffect(() => {
        const { date, items, saleType, contactId, agentId, containers } = saleOrder || {};
        setLineItems(items || []);
        setContainers(containers || []);
        setDate(dayjs(date));
        setSaleType(saleType);
        setContactId(contactId);
        setAgentId(agentId)
    }, [saleOrder]);

    return (
        <Modal
            title="Edit Sale"
            footer={null}
            loading={loading}
            open={open}
            onCancel={onClose}
            styles={{ content: { padding: '10px' } }}
            style={{ maxWidth: "fit-content", top: '50px' }}
            width="fit-content"
        >
            <ColFlex gap="15px">
                <DatePicker value={date} style={{ alignSelf: "end", marginTop: "10px" }} format="DD/MM/YYYY" onChange={(e, v) => setDate(dayjs(v, "DD/MM/YYYY"))} />
                <Select
                    showSearch
                    value={contactId}
                    placeholder="Select Customers"
                    optionFilterProp="label"
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={allContacts}
                    style={{ width: '100%' }}
                    onChange={(e, v) => setContactId(v)}
                />
                <RowFlex m="0">
                    <StyledText m="auto 20px auto 0" fs="14px" ff="Inter">Sale Type : </StyledText>
                    <Radio.Group
                        options={[
                            { label: "Local", value: "local" },
                            { label: "InterState", value: "interState" }
                        ]}
                        value={saleType}
                        optionType="button"
                        onChange={(e) => setSaleType(e.target.value)}
                    />
                </RowFlex>
                {saleType == "interState" &&
                    <RowFlex m="0">
                        <StyledText m="auto 20px auto 0" fs="14px" ff="Inter">Agent : </StyledText>
                        <Select
                            showSearch
                            value={agentId}
                            placeholder="Select Agent"
                            optionFilterProp="label"
                            popupMatchSelectWidth={false}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={allAgents}
                            onChange={(e, v) => setAgentId(v)}
                        />
                    </RowFlex>}
                <Table
                    bordered
                    size="middle"
                    columns={columns}
                    dataSource={lineItems}
                    rowClassName={() => 'editable-row'}
                    pagination={{
                        position: ["none", "bottomCenter"],
                        pageSize,
                        onChange: (p) => handleTableChange(p, setCurrentPage),
                        current: currentPage
                    }}
                    components={{
                        body: {
                            row: ItemTableEditableRow,
                            cell: ItemTableEditableCell,
                        }
                    }}
                    footer={() => <Button type="dashed" onClick={handleAdd} block icon={<PlusCircle size={24} color="rgb(140,140,140)" />}>
                        Add Item
                    </Button>
                    }
                    style={{ width: '100%', marginLeft: 0 }}
                />
                <Table
                    bordered
                    size="middle"
                    columns={containerTableColumn}
                    dataSource={container}
                    rowClassName={() => 'editable-row'}
                    pagination={false}
                    components={{
                        body: {
                            row: ContainerTableEditableRow,
                            cell: ContainerTableEditableCell,
                        }
                    }}
                    footer={() => <Button type="dashed" onClick={handleContainerAdd} block icon={<PlusCircle size={24} color="rgb(140,140,140)" />}>
                        Add Container
                    </Button>
                    }
                    style={{ width: '100%', marginLeft: 0 }}
                />
                <StyledPillButton c="#fff" w="80px" h="42px" type="primary" onClick={onFinish} style={{ alignSelf: "center" }}>
                    Save
                </StyledPillButton>
            </ColFlex>
        </Modal>
    );
};

export default EditSalesOrder;
