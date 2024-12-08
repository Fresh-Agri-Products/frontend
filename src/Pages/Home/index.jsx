import { useNavigate } from "react-router-dom";
import { addCommas, checkAccess, screenHeight } from "../../common-utils";
import HeaderComponent from "../../Components/Header";
import { ColFlex, StyledDiv } from "../../Styled/Layout";
import svg from "../../assets/Frame.svg";
import Type1Card from "../../Components/Card/Type1Card";

const Home = () => {
  const navigate = useNavigate();

  return (
    <ColFlex ai="center" minH={false ? `${screenHeight}` : "100vh"} maxW="500px" w="100%" bgc="#f7f8fa" style={{ position: "relative" }}>
      <HeaderComponent />
      <ColFlex m="0" w="100%" p="20px" style={{ flex: 1 }}>
        {
          checkAccess('EDIT_SALE_ORDER') && <StyledDiv className="blur-background" w="100%" br="8px" bg={`url(${svg})`} p="20px" gap="16px" mb="20px" style={{ //bgc="#dfe7fe"
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            backgroundSize: "cover"
          }}>
            <Type1Card value={`₹${addCommas(0)}`} title="Total Sales" />
            <Type1Card value={`₹${addCommas(0)}`} title="Total Purchase" />
          </StyledDiv>
        }
        <StyledDiv p="30px" br="8px" bgc="#fff" onClick={() => navigate("/sale")}>
            Sale
        </StyledDiv>
      </ColFlex>
    </ColFlex>
  );
};

export default Home;
