import styled from "styled-components";
import { COLORS } from "../constants/colors";

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${COLORS.veryDarkBlue};
`;

export const LargeTitle = styled.h1`
  font-size: 3rem;
  color: ${COLORS.veryDarkBlue};
`;

export const Text = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${COLORS.darkGrayishBlue};
`;

export const BoldText = styled.p``;

export const CapitalizedText = styled.p`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${COLORS.darkGrayishBlue};
`;
