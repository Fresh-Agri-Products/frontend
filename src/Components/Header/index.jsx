import { Avatar } from "antd";
import { RowFlex, StyledText } from "../../Styled/Layout";
import { SignOut } from "@phosphor-icons/react";
import { clearLocalStorage } from "../../common-utils";

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
        <Avatar size={24} style={{ backgroundColor: '#87d068' }}>F</Avatar>
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
