import styled from "styled-components";

export const BurgerSC = styled.section`
  display: flex;
  flex-direction: column;

  &:nth-child(3) {
    margin-top: -2rem;
  }
`;

export const Bread = styled.div`
  background-image: url(${(props) => props.img});
  height: 8rem;
  width: 30rem;

  &:nth-child(1) {
    margin-bottom: -0.9rem;
  }

  ${(props) =>
    props.variant ? "margin-top: -3rem; transform: rotateZ(-3deg);" : ""}
`;

export const BtnWrapperSC = styled.div`
  display: flex;
  justify-content: center;
  gap: 7rem;
  width: 100%;

  & > button {
    width: 4rem;

    &:nth-child(2n - 1) {
      margin-top: 4rem;
    }

    & > img {
      width: 100%;
    }
  }
`;

export const TextSC = styled.p`
  color: #040306;
`;
