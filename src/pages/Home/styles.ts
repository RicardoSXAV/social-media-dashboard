import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import { DarkModeProps } from "../../types/DarkModeProps";

export const HomeContainer = styled.div<DarkModeProps>`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 2rem 8rem 4rem 8rem;

  @media (max-width: 760px) {
    padding: 2rem 4rem 4rem 4rem;
  }

  @media (max-width: 632px) {
    padding: 2rem;
  }

  overflow-x: hidden;
  background: ${(props) => props.darkMode && COLORS.veryDarkBlue};

  .home-title-row {
    width: 100%;
    justify-content: space-between;

    @media (max-width: 568px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .theme-row {
      gap: 1rem;

      @media (max-width: 568px) {
        width: 100%;
        justify-content: space-between;
      }
    }
  }

  .home-overview {
    color: ${COLORS.darkGrayishBlue};
  }

  .home-card-list {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;

    width: 100%;
    padding: 3rem 0;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;

  background-color: ${COLORS.darkGrayishBlue};
`;
