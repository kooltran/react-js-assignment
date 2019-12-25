import styled from "styled-components";

export const StyledTripItem = styled.div`
  width: 50%;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
  margin-right: 15px;
  padding: 10px;
  background: #f8f9fa;
  color: #777;
  display: flex;

  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 10px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledTripItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 10px;
  justify-content: center;
  align-items: center;

  &:last-child {
    margin: 0;
  }
`;

export const StyledTripLabel = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
  color: #222;
`;

export const StyledTripContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

export const StyledTripImg = styled.img`
  width: 80px;
  height: 80px;
`;
