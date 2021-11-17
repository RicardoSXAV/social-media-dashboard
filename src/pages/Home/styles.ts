import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { DarkModeProps } from "../../types/DarkModeProps";

export const HomeContainer = styled.div<DarkModeProps>`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 2rem 8rem 4rem 8rem;

  overflow-x: hidden;
  background: ${(props) => props.darkMode && COLORS.veryDarkBlue};

  .home-title-row {
    width: 100%;
    justify-content: space-between;

    .theme-row {
      gap: 1rem;
    }
  }

  .home-overview {
    color: ${COLORS.darkGrayishBlue};
  }

  .home-card-list {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 3rem 0;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
