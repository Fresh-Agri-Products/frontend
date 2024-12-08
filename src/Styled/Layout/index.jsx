import { Card, Col, Input, Row } from "antd";
import styled from "styled-components";

export const StyledDiv = styled.div`
  ${(props) => props.gap && `gap: ${props.gap};`}
  display: ${(props) => props.d || ""};
  position: ${(props) => props.pos || ""};
  margin-top: ${(props) => props.mt || ""};
  width: ${(props) => props.w || ""};
  margin-left: ${(props) => props.ml || ""};
  margin-bottom: ${(props) => props.mb || ""};
  bottom: ${(props) => props.bottom || ""};
  right: ${(props) => props.right || ""};
  background: ${(props) => props.bg || ""};
  padding: ${(props) => props.p || ""};
  height: ${(props) => props.h || ""};
  min-height: ${(props) => props.minH || ""};
  margin: ${(props) => props.m || ""};
  background-color: ${(props) => props.bgc || ""};
  justify-content: ${(props) => props.jc || ""};
  align-items: ${(props) => props.ai || ""};
  flex-direction: ${(props) => props.fd || ""};
  flex-wrap: ${(props) => props.fw || ""};
  border-radius: ${(props) => props.br || ""};
  box-shadow: ${(props) => props.bs || ""};
  aspect-ratio: ${(props) => props.ar || ""};
  border: ${(props) => props.b || ""};
  left: ${(props) => props.left || ""};
  top: ${(props) => props.top || ""};
  overflow-x: ${(props) => props.oflx || ""};
  overflow-y: ${(props) => props.ofly || ""};
  max-width: ${(props) => props.maxW || ""};
  max-height: ${(props) => props.maxH || ""};
  z-index: ${(props) => props.zi || ""};
  filter: ${(props) => props.fi || ""};
  &:before {
    background-image: ${(props) => props.bgurl || ""};
  }
`;

export const StyledText = styled.p`
  display: ${(props) => props.d || ""};
  position: ${(props) => props.pos || ""};
  font-family: ${(props) => props.ff || "Inter"};
  background: ${(props) => props.bg || ""};
  color: ${(props) => props.c || "#000"};
  font-size: ${(props) => props.fs || "16px"};
  line-height: ${(props) => props.lh || "24px"};
  font-weight: ${(props) => props.fw || "400"};
  width: ${(props) => props.w || ""};
  max-width: ${(props) => props.maxw || ""};
  margin-top: ${(props) => props.mt || "0px"};
  margin-right: ${(props) => props.mr || "0px"};
  margin-left: ${(props) => props.ml || "0px"};
  text-align: ${(props) => props.ta || "center"};
  align-self: ${(props) => props.aself || ""};
  letter-spacing: ${(props) => props.ls || "0px"};
  margin-bottom: ${(props) => props.mb || "0px"};
  margin: ${(props) => props.m || ""};
  padding-left: ${(props) => props.pl || "0px"};
  filter: ${(props) => `blur(${props.blur || "0px"})`};
  padding-top: ${(props) => props.pt || "0px"};
  padding: ${(props) => props.p || ""};
  cursor: ${(props) => (props.hoverable ? "pointer" : "")};
  ${(props) => props.flexGrow && `flex-grow: ${props.flexGrow};`}
  opacity: ${(props) => props.opac || ""};
  left: ${(props) => props.left || ""};
  ${(props) => props.noPointer && `cursor: default;`}
  top: ${(props) => props.top || ""};
  text-wrap: ${(props) => props.tw || "nowrap"};
  white-space: inherit;
  align-items: ${(props) => props.ai || ""};
  flex-direction: ${(props) => props.fd || ""};
  text-decoration: ${(props) => props.td || ""};
  filter: ${(props) => props.fi || ""};
`;

export const RowFlex = styled.div`
  ${(props) => props.gap && `gap: ${props.gap};`}
  background: ${(props) => props.bg};
  display: flex;
  flex-direction: ${(props) => props.flexd || "row"};
  cursor: ${(props) => (props.hoverable ? "pointer" : "")};
  flex-wrap: ${(props) => props.fw || ""};
  justify-content: ${(props) => props.jc || "space-between"};
  align-items: ${(props) => props.ai || ""};
  width: ${(props) => props.w || ""};
  height: ${(props) => props.h || ""};
  margin: ${(props) => props.m || "auto"};
  padding: ${(props) => props.p || ""};
  box-shadow: ${(props) => props.bs || ""};
  border: ${(props) => props.b || ""};
  border-radius: ${(props) => props.br || ""};
  z-index: ${(props) => props.zi || ""};
`;

export const ColFlex = styled.div`
  ${(props) => props.gap && `gap: ${props.gap};`}
  display: ${(props) => props.d || "flex"};
  width: ${(props) => props.w || ""};
  height: ${(props) => props.h || ""};
  margin: ${(props) => props.m || "auto"};
  background-color: ${(props) => props.bgc || ""};
  background: ${(props) => props.bg || ""};
  flex-direction: ${(props) => props.flexd || "column"};
  justify-content: ${(props) => props.jc || ""};
  align-items: ${(props) => props.ai || "flex-start"};
  overflow-x: ${(props) => props.oflx || ""};
  overflow-y: ${(props) => props.ofly || ""};
  border: ${(props) => props.b || ""};
  border-radius: ${(props) => props.br || ""};
  min-height: ${(props) => props.minH || ""};
  max-width: ${(props) => props.maxW || ""};
  padding: ${(props) => props.p || ""};
  position: ${(props) => props.pos || ""};
  margin-top: ${(props) => props.mt || ""};
  ${(props) => props.bottom && `bottom: ${props.bottom};`}
    ${(props) => props.bs && `box-shadow: ${props.bs};`}
  &:before {
    background-image: ${(props) => props.bgurl || ""};
  }
`;
export const StyledCard = styled(Card)`
  display: ${(props) => props.d || ""};
  ${(props) => props.gap && `gap: ${props.gap};`}
  background-color: ${(props) => props.bgc || "#FFF"};
  width: ${(props) => props.w || ""};
  height: ${(props) => props.h || ""};
  margin: ${(props) => props.m || "auto"};
  margin-bottom: ${(props) => props.mb || ""};
  border: ${(props) => props.b || ""};
  border-radius: ${(props) => props.br || ""};
  "&:hover": {
    cusrsor: ${(props) => (props.hoverable ? "pointer" : "")};
  }
  padding: 0px;
  .ant-card-body {
    ${(props) => props.gap && `gap: ${props.gap};`}
    ${(props) => props.p && `padding: ${props.p};`}
        padding-left: ${(props) => (props.square ? "" : "")};
    width: ${(props) => props.w || ""};
    height: ${(props) => props.h || ""};
    ${(props) => props.d && `display: ${props.d};`}
    ${(props) => props.flexd && `flex-direction: ${props.flexd};`}
        ${(props) => props.jc && `justify-content: ${props.jc};`}
        ::after, ::before {
      content: none;
    }
  }
  ${(props) => props.gridColumn && `grid-column: ${props.gridColumn};`}
  ${(props) => props.pos && `position: ${props.pos};`}
    ${(props) => props.bottom && `bottom: ${props.bottom};`}
    ${(props) => props.maxW && `max-width: ${props.maxW};`}
    ${(props) => props.bs && `box-shadow: ${props.bs};`}
`;
export const StyledImage = styled.img`
  width: ${(props) => props.w || "32px"};
  height: ${(props) => props.h || "32px"};
  cursor: ${(props) => (props.hoverable ? "pointer" : "")};
  margin-left: ${(props) => props.ml || ""};
  margin-right: ${(props) => props.mr || ""};
  margin-top: ${(props) => props.mt || ""};
  color: ${(props) => props.c || ""};
  z-index: ${(props) => props.zi || ""};
  margin: ${(props) => props.m || ""};
  display: ${(props) => props.d || ""};
  filter: ${(props) => props.fi || ""};
`;
export const StyledInput = styled(Input)`
  width: ${(props) => props.w || ""};
  height: ${(props) => props.h || "46px"};
  background: ${(props) => props.bg};
  background-image: ${(props) => props.bgurl};
  background-repeat: ${(props) => props.bgrepeat || "no-repeat"};
  background-position: ${(props) => props.bgpos || "12px 18.5px"};
  padding: ${(props) => props.pl || ""};
  border-radius: ${(props) => props.br || ""};
  font-size: ${(props) => props.fs || "16px"};
  line-height: ${(props) => props.lh || "19px"};
  letter-spacing: ${(props) => props.ls || ""};
  font-weight: ${(props) => props.fw || "500"};
  margin-bottom: ${(props) => props.mb || "0"};
  &:hover: {
    border-color: ${(props) => props.bc || "#0F4F93"} !important;
  }
  &:focus {
    border-color: ${(props) => props.bc || "#0F4F93"} !important;
    box-shadow: ${(props) => props.b || "0 0 0 2px rgb(15 79 147 / 10%)"} !important;
  }
  ${(props) => props.b && `border: ${props.b};`}
`;

export const StyledRow = styled(Row)`
    margin: ${(props) => props.m || "auto"};
    padding: ${(props) => props.p || ""};
    width: ${(props) => props.w || "1088px"};
    height: ${(props) => props.h || ""};
    background-color: ${(props) => props.bgc || ""};
    border-radius: ${(props) => props.br || "0px"};
    box-shadow: ${(props) => props.bs || ""};
    display: ${(props) => props.d || ""};
  flex-wrap: ${(props) => props.flw || ""};
    cursor: ${(props) => (props.hoverable ? "pointer" : "")};
    ${(props) => props.mb && `margin-bottom: ${props.mb};`}
    ${(props) => props.mt && `margin-top: ${props.mt};`}
    ${(props) => props.jc && `justify-content: ${props.jc};`}
    ${(props) => props.fd && `flex-direction: ${props.fd};`}
    ${(props) => props.gap && `gap: ${props.gap};`}
    ${(props) => props.bt && `border-top: ${props.bt};`}
    ${(props) => props.bb && `border-bottom: ${props.bb};`}
    ${(props) => props.pb && `padding-bottom: ${props.pb};`}
    ${(props) => props.pt && `padding-top: ${props.pt};`} 
    ${(props) => props.ai && `align-items: ${props.ai};`}
`;

export const StyledCol = styled(Col)`
    margin: ${(props) => props.m || "auto"};
    padding: ${(props) => props.p || ""};
    width: ${(props) => props.w || "1088px"};
    height: ${(props) => props.h || ""};
    background-color: ${(props) => props.bgc || ""};
    border-radius: ${(props) => props.br || "0px"};
    display: ${(props) => props.d || ""};
    flex-direction: ${(props) => props.flexd || ""};
    ${(props) => props.flex && `flex: ${props.flex};`}
    justify-content: ${(props) => props.jc || "center"};
    align-items: ${(props) => props.ai || "center"};
    ${(props) => props.hide && "display: none;"}
    text-align: ${(props) => props.ta || ""};
`;