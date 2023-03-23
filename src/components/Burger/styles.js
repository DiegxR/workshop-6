import styled from 'styled-components';

export const BurgerSC = styled.section`
   display: flex;
`

export const Bread = styled.div`
   ${props.variable => (
    (props.variable === 'top') ? 'border-radius: 10px 10px 0 0' : ''
   )}
`