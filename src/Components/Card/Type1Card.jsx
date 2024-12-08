import { useNavigate } from "react-router-dom";
import { ColFlex, RowFlex, StyledDiv, StyledText } from "../../Styled/Layout";

const Type1Card = (props) => {
  const navigate = useNavigate();

  return (
    <RowFlex w="100%" bg="#fff" br="8px" zi="1" p="15px 15px 5px">
      <ColFlex m="0" gap="5px">
        <StyledText fs="18px">
          {props.value}
        </StyledText>
        <StyledText fs="12px" c="#00000070">
          {props.title}
        </StyledText>
      </ColFlex>
    </RowFlex>
  );
};

export default Type1Card;
