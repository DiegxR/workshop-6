import styled from "styled-components";

export const ContainerbtnCS = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const BurgerSC = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Bread = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  height: 150px;
  width: 100%;
  display:flex;
  justify-content: center;



`

export const BtnWrapperSC = styled.div`
  display: flex;
  justify-content: center;
  gap: 7rem;
  width: 100%;
  margin-top: 5%;

  & > button {
    border: 1px solid rgb(230, 230, 230);;
    border-radius: 10px;


    & > img {
      width: 80%;
    }
  }
`;


