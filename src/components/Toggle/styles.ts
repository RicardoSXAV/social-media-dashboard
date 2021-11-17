import styled from "styled-components";
import { COLORS } from "../../constants/colors";

type ToggleProps = {
  toggled?: boolean;
};

export const ToggleContainer = styled.div<ToggleProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 50px;
  height: 25px;
  padding: 0 3px;

  background: ${(props) =>
    props.toggled ? COLORS.toggleDark : COLORS.toggleLight};
  border-radius: 20px;

  .toggle-circle {
    transform: translateX(-25px);
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ToggleCircle = styled.div<ToggleProps>`
  position: absolute;

  width: 18px;
  height: 18px;

  background-color: ${(props) =>
    props.toggled ? COLORS.veryDarkBlue : COLORS.white};
  border-radius: 50%;
  transition: 0.4s;
`;
