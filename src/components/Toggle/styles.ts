import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 50px;
  height: 25px;
  padding: 0 3px;

  background-color: ${COLORS.darkGrayishBlue};
  border-radius: 20px;
`;

export const ToggleCircle = styled.div`
  position: absolute;

  width: 18px;
  height: 18px;

  background-color: ${COLORS.white};
  border-radius: 50%;
`;
