import { RowFlex, StyledImage, StyledText } from "../../Styled/Layout";
import { SignOut } from "@phosphor-icons/react";
import { clearLocalStorage } from "../../common-utils";
import Logo from "../../assets/Logo.svg";

const HeaderComponent = (props) => {
  return (
    <RowFlex
      w="100%"
      h="56px"
      bg="#fff"
      m="0"
    >
      <RowFlex
        gap="10px"
        ai="center"
        m="0 0 0 20px"
      >
        <StyledImage src={Logo} w="26px" h="26px"/>
        <StyledText fs="18px" lh="24px" fw="600" ff="Inter" c="#000">
          Fresh Agri Product
        </StyledText>
      </RowFlex>
      {
        props.isLogedIn != false && <SignOut size={24} color="#00000090" style={{margin: "auto 20px auto 0"}} onClick={() => {
          clearLocalStorage();
          window.location.reload();
        }} />
      }
    </RowFlex>
  );
};

export default HeaderComponent;
