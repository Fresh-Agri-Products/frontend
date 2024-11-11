import { useNavigate } from "react-router-dom";
import { screenHeight } from "../../common-utils";
import HeaderComponent from "../../Components/Header";
import { ColFlex, StyledDiv } from "../../Styled/Layout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <ColFlex ai="center" minH={false ? `${screenHeight}` : "100vh"} maxW="500px" w="100%" bgc="#fff" style={{ position: "relative" }}>
        <HeaderComponent />
      <ColFlex m="0" w="100%" p="20px">
        <StyledDiv p="30px" br="8px" b="2px solid #8c8c8c70" onClick={()=>navigate("/sale")}>
          Sale
        </StyledDiv>
      </ColFlex>
    </ColFlex>
  );
};

export default Home;
