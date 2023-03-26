import styled from "styled-components";

export const ContainerbtnCS = styled.section`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const BurgerSC = styled.section`
  display: flex;
  flex-direction: column;
  
  margin: auto;
  &:nth-child(3) {
    margin-top: 0rem;
  }
`;

export const Bread = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  height: 8rem;
  width: 100%;
  
  &:nth-child(1) {
    margin-bottom: -0.9rem;
  }

  ${(props) =>
    props.variant ? "margin-top: -3rem; transform: rotateZ(-3deg); width: 80%;" : ""}
`;

export const BtnWrapperSC = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  & > button {
    width: 4rem;

    &:nth-child(2n - 1) {
      margin-top: 0;
    }

    & > img {
      width: 100%;
    }
  }
`;

export const TextSC = styled.p`
  color: #040306;
  background-color: rgb(255, 196, 2);
  width: 200px;
  margin: auto;
  border-radius: 15px;
  padding: 4px;
`;
