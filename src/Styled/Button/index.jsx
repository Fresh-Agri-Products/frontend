import { Button } from "antd";
import styled from "styled-components";;

export const StyledPillButton = styled(Button)`
  background: ${(props) =>
    props.isActive ? props.activeBgc || "" : props.bgc || ""} !important;
  width: ${(props) => (props.isActive ? props.activeW || "" : props.w || "")};
  display: ${(props) => props.d || ""};
  height: ${(props) => props.h || ""};
  font-size: ${(props) => props.fs || "16px"};
  font-weight: ${(props) => props.fw || "500"};
  font-family: ${(props) => props.ff};
  margin: ${(props) => props.m || ""};
  margin-right: ${(props) => props.mr || ""};
  padding: ${(props) => props.p || ""};
  border: ${(props) =>
    props.b || "1px solid rgba(217, 217, 217, 1)"} !important;
  border-radius: ${(props) => props.br || "45px"};
  color: ${(props) =>
    props.isActive
      ? props.activeC || "rgba(255, 255, 255, 1)"
      : props.c || "rgba(48, 48, 48, 1)"} !important;
  margin-bottom: ${(props) => props.mb || ""};
  margin-top: ${(props) => props.mt || ""};
  ${(props) => props.bottom && `bottom: ${props.bottom};`}
  &:focus {
    background: ${(props) => props.focusbgc || ""} !important;
    border: ${(props) => props.b || ""} !important;
  }
  &:disabled {
    background: grey !important;
    color: #ccc !important;
    cursor: not-allowed !important;
    border: none !important;
  }
`;
export const StyledButton = styled(Button)`
  background: ${(props) => props.bgc || "#FFF"} !important;
  width: ${(props) => props.w || ""};
  display: ${(props) => props.d || ""};
  height: ${(props) => props.h || "46px"};
  font-size: ${(props) => props.fs || "16px"};
  font-weight: ${(props) => props.fw || "500"};
  font-family: ${(props) => props.ff};
  margin: ${(props) => props.m || ""};
  margin-right: ${(props) => props.mr || ""};
  padding: ${(props) => props.p || ""};
  border: ${(props) => props.b || ""} !important;
  border-radius: ${(props) => props.br || "10px"};
  color: ${(props) => props.c || "#3465FF"} !important;
  margin-bottom: ${(props) => props.mb || ""};
  margin-top: ${(props) => props.mt || ""};
  ${(props) => props.bottom && `bottom: ${props.bottom};`}

  &:hover {
    background: ${(props) =>
      props.hoverbgc ? props.hoverbgc : props.bgc || ""} !important;
    border: ${(props) => props.b || "0px"} !important;
    color: ${(props) => props.c || "#3465FF"} !important;
  }
  &:focus {
    background: ${(props) => props.focusbgc || ""} !important;
    border: ${(props) => props.b || ""} !important;
    color: ${(props) => props.c || "#3465FF"} !important;
  }
  &:disabled {
    background: grey !important;
    color: #ccc !important;
    cursor: not-allowed !important;
    border: none !important;
  }
`;
