import { CaretLeft } from "@phosphor-icons/react";
import { RowFlex, StyledText } from "../../Styled/Layout";

const CommonHeader = (props) => {
  const {title, onBack, rightContent} = props;
  return (
    <RowFlex
          w="100%"
          h="56px"
          m="0"
          p="10px 20px"
          bg="#EDF6FF"
    >
      <RowFlex m="auto 0" gap="10px">
        <CaretLeft size={24} color="#000" onClick={onBack} />
        <StyledText fs="18px" lh="24px" fw="600" ff="Inter" c="#000" mb="auto">
            {title}
        </StyledText>
      </RowFlex>
      {rightContent}
    </RowFlex>
  );
};

export default CommonHeader;
