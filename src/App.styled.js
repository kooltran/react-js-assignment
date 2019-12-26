import styled from "styled-components";

export const StyledTripWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 20px;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
`;
