import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCommas, checkAccess, handleCatch, screenHeight } from "../../common-utils";
import HeaderComponent from "../../Components/Header";
import { ColFlex, StyledDiv } from "../../Styled/Layout";
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
        <StyledDiv p="30px" b="1px solid #00000010" br="8px" bgc="#fff" onClick={() => navigate("/sale")}>
            Sale
        </StyledDiv>
      </ColFlex>
    </ColFlex>
  );
};

export default Home;
