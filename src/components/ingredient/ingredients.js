import styled from "styled-components";

export const ImgsWrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > img {
    width: 40%;
    z-index: 1;
  }
`;
