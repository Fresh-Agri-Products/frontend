import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCommas, checkAccess, handleCatch, screenHeight } from "../../common-utils";
import HeaderComponent from "../../Components/Header";
import { ColFlex, StyledDiv, StyledText } from "../../Styled/Layout";
import HomeDesign1 from "../../assets/HomeDesign1.svg";
import HomeDesign2 from "../../assets/HomeDesign2.svg";
import Type1Card from "../../Components/Card/Type1Card";
import { fetchDashboardData } from "../../api";

const Home = () => {
  const navigate = useNavigate();
  const [totalSales, setTotalSales] = useState(0);
  const [totalSalesOrders, setTotalSalesOrders] = useState(0);
  const [dailySalesOrders, setDailySalesOrders] = useState(0);

  const getDashboardData = async () => {
    try {
      const res = await fetchDashboardData();
      if(res.status == 200) {
        setTotalSales(res.data.totalSales);
        setDailySalesOrders(res.data.dailySalesOrders);
        setTotalSalesOrders(res.data.totalSalesOrders);
      }
    } catch (err) {
      handleCatch(err);
    }
  }

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <ColFlex ai="center" minH={false ? `${screenHeight}` : "100vh"} maxW="500px" w="100%" bgc="#f7f8fa" style={{ position: "relative" }}>
      <HeaderComponent />
      <ColFlex m="0" w="100%" p="20px" style={{ flex: 1 }}>
        {
          checkAccess('ANALYTICS') && <StyledDiv className="blur-background" w="100%" br="8px" bg={`url(${HomeDesign1})`} p="20px" gap="16px" mb="20px" style={{ //bgc="#dfe7fe"
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            backgroundSize: "cover"
          }}>
            <Type1Card value={`₹${totalSales ? addCommas(totalSales.toFixed(2)) : 0}`} title="Total Sales" />
            <Type1Card value={`₹${addCommas(0)}`} title="Total Purchase" />
            <Type1Card value={addCommas(totalSalesOrders)} title="Total SO" />
            <Type1Card value={addCommas(0)} title="Total PO" />
          </StyledDiv>
        }
        <StyledDiv className="blur-background" w="100%" br="8px" bg={`url(${HomeDesign2})`} p="20px" gap="16px" mb="20px" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          backgroundSize: "cover"
        }}>
          <Type1Card value={addCommas(dailySalesOrders)} title="Daily Sales" />
          <Type1Card value={addCommas(0)} title="Daily Purchase" />
        </StyledDiv>
        <StyledDiv w="100%" br="8px" bgc="#00000005" p="20px" gap="16px" mb="20px" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          backgroundSize: "cover"
        }}>
          <StyledDiv p="30px 0" b="1px solid #00000010" br="15px" bgc="#fff" onClick={() => navigate("/sale")} style={{borderTop: "3px solid mediumseagreen"}}>
            <StyledText fs="15px" fw="600" ta="center">
              Sale
            </StyledText>
          </StyledDiv>
          {/* <StyledDiv p="30px 0" b="1px solid #00000010" br="15px" bgc="#fff" onClick={() => navigate("/sale")} style={{borderTop: "3px solid orange"}}>
            <StyledText fs="14px" fw="600" ta="center">
              Purchase
            </StyledText>
          </StyledDiv> */}
          {
            checkAccess('SHOW_CONTACT') && <StyledDiv p="30px 0" b="1px solid #00000010" br="15px" bgc="#fff" onClick={() => navigate("/contacts")} style={{borderTop: "3px solid cadetblue"}}>
              <StyledText fs="15px" fw="600" ta="center">
                Contacts
              </StyledText>
            </StyledDiv>
          }
        </StyledDiv>
      </ColFlex>
    </ColFlex>
  );
};

export default Home;
