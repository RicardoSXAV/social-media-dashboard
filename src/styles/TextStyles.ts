import styled from "styled-components";
import { COLORS } from "../constants/colors";
import { DarkModeProps } from "../types/DarkModeProps";

export const Title = styled.h1<DarkModeProps>`
  font-size: 1.5rem;
  color: ${(props) => (props.darkMode ? COLORS.white : COLORS.veryDarkBlue)};
`;

export const LargeTitle = styled.h1<DarkModeProps>`
  font-size: 3rem;
  color: ${(props) => (props.darkMode ? COLORS.white : COLORS.veryDarkBlue)};
`;

export const Text = styled.p<DarkModeProps>`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(props) =>
    props.darkMode ? COLORS.desaturatedBlue : COLORS.darkGrayishBlue};
`;

export const CapitalizedText = styled.p<DarkModeProps>`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${COLORS.darkGrayishBlue};
`;
