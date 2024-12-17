import { CaretLeft } from "@phosphor-icons/react";
import { RowFlex, StyledText } from "../../Styled/Layout";

const CommonHeader = (props) => {
  const {title, onBack, rightContent, bgc} = props;
  return (
    <RowFlex
          w="100%"
          h="56px"
          m="0"
          p="10px 20px"
          bg={bgc}
    >
      <RowFlex m="auto 0" gap="10px">
        <CaretLeft size={24} color="#fff" onClick={onBack} />
        <StyledText fs="18px" lh="24px" fw="600" ff="Inter" c="#fff" mb="auto">
            {title}
        </StyledText>
      </RowFlex>
      {rightContent}
    </RowFlex>
  );
};

export default CommonHeader;
