import { useEffect, useState } from "react";
import { Descriptions, Input, Table } from "antd";
import { addCommas, checkAccess, checkAccessAndRedirect, handleCatch, screenHeight } from "../../common-utils";
import CommonHeader from "../../Components/CommonHeader";
import { ColFlex, RowFlex, StyledDiv, StyledText } from "../../Styled/Layout";
import { statusDesign } from "../../Components/TableColumns";
import { fetchAllContacts } from "../../api/sales";
import { StyledButton } from "../../Styled/Button";
import { ArrowsClockwise, Plus, User } from "@phosphor-icons/react";
import { PencilSimple } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import AddContact from "../../Components/AddContactModal";
import EditContact from "../../Components/EditContactModal";

const SaleOrderStatus = [
  { value: 'PENDING', label: <StyledText ta="left" fs="14px" fw="600" c={statusDesign['PENDING']}>Pending</StyledText> },
  { value: 'PACKED', label: <StyledText ta="left" fs="14px" fw="600" c={statusDesign['PACKED']}>Packed</StyledText> },
  { value: 'SENT', label: <StyledText ta="left" fs="14px" fw="600" c={statusDesign['SENT']}>Sent</StyledText> },
  { value: 'DONE', label: <StyledText ta="left" fs="14px" fw="600" c={statusDesign['DONE']}>Done</StyledText> },
  { value: 'CANCELLED', label: <StyledText ta="left" fs="14px" fw="600" c={statusDesign['CANCELLED']}>Cancelled</StyledText> }
];

const Contact = () => {
  const navigate = useNavigate();
  const [addContactModalOpen, setAddContactModalOpen] = useState(false);
  const [editContactModalOpen, setEditContactModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [allContacts, setAllContacts] = useState([]);
  
  //filters
  const [searchText, setSearchText] = useState("");

  const columns = [
    {
      title: 'Name',
      dataIndex: 'displayName',
      filteredValue: [(searchText || '')],
      onFilter: (value, record) => record.displayName?.toLowerCase()?.includes(value?.toLowerCase() || '')
    }
  ];

  // if (checkAccess('EDIT_SALE_ORDER')) {
  //   columns.push({
  //     key: 'action',
  //     render: (_, rowData) => <PencilSimple size={18} color="rgba(0, 0, 0, 0.58)" weight="fill" onClick={(e) => {
  //       e.stopPropagation();
  //       setSelectedContact(rowData);
  //       setEditContactModalOpen(true);
  //     }} />,
  //     width: 1
  //   })
  // }

  const HeaderContent = () => {
    return (
      <RowFlex m="0" gap="20px">
        <StyledButton h="32px" shape="circle" icon={<Plus size={18} color="#6a8099" weight="bold" />} onClick={() => setAddContactModalOpen(true)} style={{margin: "auto"}} />
        {/* <DownloadSimple size={24} color="#fff" style={{ alignSelf: "end", margin: "auto" }} onClick={handleDownload} /> */}
      </RowFlex>
    )
  }

  const getAllContacts = async () => {
    try {
      const res = await fetchAllContacts();
      if (res.status == 200) {
        setAllContacts(res.data);
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  const clearFilter = () => {
    setSearchText('');
  }

  useEffect(() => {
    checkAccessAndRedirect("SHOW_CONTACT");
    getAllContacts();
  }, []);

  return (
    <ColFlex ai="center" minH={false ? `${screenHeight}` : "100vh"} maxW="500px" w="100%" bgc="#fff" style={{ position: "relative" }}>
      <CommonHeader title="Contacts" bgc="#6a8099" onBack={() => navigate(-1)} rightContent={checkAccess('EDIT_SALE_ORDER') ? <HeaderContent /> : null} />
      <ColFlex m="0" w="100%" p="20px" gap="20px">
        <RowFlex w="100%" m="0" gap="20px">
          <Input
            value={searchText}
            size="large"
            placeholder="Search Contact Name"
            prefix={<User size={18} color="#00000050" />}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            style={{ minWidth: '40%', width: '100%' }}
          />
          <ArrowsClockwise size={28} weight="bold" color="#00000070" onClick={clearFilter} style={{margin: "auto"}} />
        </RowFlex>
        <Table
          style={{ width: '100%' }}
          size="middle"
          pagination={{
            position: ["none", "bottomCenter"],
            pageSize: 15
          }}
          columns={columns}
          dataSource={allContacts || []}
          expandable={{
            expandIcon: () => null,
            expandIconColumnIndex: -1,
            expandRowByClick: true,
            expandedRowRender: (record) => <StyledDiv id="1234" w="100%">
              <Descriptions
                title=""
                size="small"
                style={{ marginBottom: "10px" }}
                layout="vertical"
                bordered
                column={{ xs: 2 }}
                items={[
                  {
                    key: '1',
                    label: 'Name',
                    children: record.primaryName,
                  }, {
                    key: '2',
                    label: 'Phone',
                    children: record.phone,
                  }, {
                    key: '3',
                    label: 'Email',
                    children: record.email,
                  }
                ]}
              />
            </StyledDiv>
          }}
          rowKey={(_, i) => i}
        />
      </ColFlex>
      <AddContact
        open={addContactModalOpen}
        onClose={() => setAddContactModalOpen(false)}
      />
      <EditContact
        open={editContactModalOpen}
        onClose={() => setEditContactModalOpen(false)}
        contact={selectedContact}
      />
    </ColFlex>
  );
};

export default Contact;
