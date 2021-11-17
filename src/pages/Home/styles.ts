import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 2rem 8rem 4rem 8rem;

  overflow-x: hidden;

  .home-title-row {
    width: 100%;
    justify-content: space-between;
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
