import styled from "styled-components";

export const ImgsWrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  align-self: baseline;
  justify-content: center;
  
  & > img {
    width: 80%;
    z-index: 2;
    margin-top: -20px;
  margin-bottom: -20px;
  }
`;
