import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5rem auto 10rem;
    grid-template-areas:
        'header'
        'content'
        'footer';
    height: 100vh;
    width: 100%;
    padding: 3rem 6rem 1rem 6rem;
`;
