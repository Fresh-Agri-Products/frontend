import { RowFlex, StyledText } from "../../Styled/Layout";

const HeaderComponent = () => {
  return (
    <RowFlex
      w="100%"
      h="56px"
      m="0"
      bg="#EDF6FF"
      gap="10px"
    >
      <StyledText fs="18px" lh="24px" fw="600" ff="Inter" c="#000" m="auto">
        Fresh Agri Product
      </StyledText>
    </RowFlex>
  );
};

export default HeaderComponent;
