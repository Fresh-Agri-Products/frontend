import { useEffect, useState } from "react";
import { DatePicker, message, Modal, Radio } from "antd";
import dayjs from 'dayjs';
import { updateSaleOrder } from "../../api/sales";
import { handleCatch } from "../../common-utils";
import { ColFlex, RowFlex, StyledText } from "../../Styled/Layout";
import { StyledPillButton } from "../../Styled/Button";

const EditContact = (props) => {
    const { open, onClose, contact } = props;
    const [contactId, setContactId] = useState(null);
    const [agentId, setAgentId] = useState(null);
    const [lineItems, setLineItems] = useState([]);
    const [container, setContainers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(null);
    const [saleType, setSaleType] = useState();

    const onFinish = async () => {
        // if (!saleOrder) {
        //     message.error('Sale order not found');
        //     return;
        // }
        // setLoading(true);
        // const saleOrderData = {};
        // if (contactId?.value && contactId.value != saleOrder.contactId) {
        //     saleOrderData.contactId = contactId.value;
        // }
        // if (saleType != saleOrder.saleType) {
        //     saleOrderData.saleType = saleType;
        // }
        // if(saleType == "interState" && agentId?.value && agentId.value != saleOrder.agentId) {
        //     saleOrderData.agentId = agentId.value;
        // } else if(saleType == "local" && saleOrder.agentId != null) {
        //     saleOrderData.agentId = null;
        // }
        // if (!dayjs(saleOrder.date).isSame(date, 'day')) {
        //     saleOrderData.date = date.valueOf();
        // }
        // try {
        //     await updateSaleOrder(saleOrder.id, {
        //         saleOrder: saleOrderData,
        //         lineItems,
        //         containers: container
        //     });
        //     message.success('sale order updated successfully');
        // } catch (err) {
        //     handleCatch(err);
        //     onClose();
        // } finally {
        //     setLoading(false);
        // }
    };

    useEffect(() => {
        const { date, items, saleType, contactId, agentId, containers } = contact || {};
        setLineItems(items || []);
        setContainers(containers || []);
        setDate(dayjs(date));
        setSaleType(saleType);
        setContactId(contactId);
        setAgentId(agentId)
    }, [contact]);

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
                <StyledPillButton c="#fff" w="80px" h="42px" type="primary" onClick={onFinish} style={{ alignSelf: "center" }}>
                    Save
                </StyledPillButton>
            </ColFlex>
        </Modal>
    );
};

export default EditContact;
