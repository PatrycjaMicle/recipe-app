import styled from 'styled-components';

export const PageTitel = styled.h1`
    background-color: ${props => props.variant === 'opcja1' ? 'rgba(69, 5, 3, 0.6);' : '#282c34'};
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 27px;
    color: white;
    border-radius:15px;
`;

export const PageSlogan = styled.h2`
    background: rgba(90, 90, 3, 0.6);
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    border-radius:15px;
`;