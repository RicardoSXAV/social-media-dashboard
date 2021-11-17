import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 240px;
  padding: 1.5rem;
  user-select: none;

  background-color: ${COLORS.lightGrayishBlue};
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    filter: brightness(0.9);
  }

  .information-row {
    justify-content: space-between;

    .information-balance-row {
      align-items: center;
      gap: 0.3rem;

      .positive-balance {
        color: ${COLORS.limeGreen};
      }

      .negative-balance {
        color: ${COLORS.brightRed};
      }
    }
  }
`;
