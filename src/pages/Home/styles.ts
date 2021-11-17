import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 2rem 8rem 4rem 8rem;

  .home-card-list {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;

    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
