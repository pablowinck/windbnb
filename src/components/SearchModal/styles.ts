import styled from 'styled-components';

export const Container = styled.div`
    height: 40vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 2;
`;
export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;
