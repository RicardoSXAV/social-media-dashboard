import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { DarkModeProps } from "../../types/DarkModeProps";

export const CardContainer = styled.button<DarkModeProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 240px;
  padding: 2rem 4rem;

  @media (max-width: 568px) {
    width: 100%;
  }

  background-color: ${(props) =>
    props.darkMode ? COLORS.darkDesaturatedBlue : COLORS.lightGrayishBlue};
  border-radius: 5px 5px 10px 10px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    filter: brightness(0.9);
  }

  .social-media-row {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .day-balance-row {
    align-items: center;
    gap: 0.3rem;

    margin-top: 1rem;

    .positive-balance {
      color: ${COLORS.limeGreen};
    }

    .negative-balance {
      color: ${COLORS.brightRed};
    }
  }
`;

type CardBorderProps = {
  color?: string;
};

export const CardBorder = styled.div<CardBorderProps>`
  position: absolute;
  top: -1px;

  width: 100%;
  height: 0.3rem;

  background: ${(props) => props.color};
  border-radius: 10px 10px 0 0;
`;
