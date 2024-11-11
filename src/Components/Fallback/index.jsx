import { Spin } from "antd";
import { FallbackLoaderWrapper } from "../../Styled/Fallback";

const FallBack = () => {
  return (
    <FallbackLoaderWrapper>
      <Spin />
    </FallbackLoaderWrapper>
  );
};

export default FallBack;
