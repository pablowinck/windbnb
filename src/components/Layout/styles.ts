import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5rem auto 2rem;
    grid-template-areas:
        'header'
        'content'
        'footer';

    grid-gap: 3rem;
    height: 100vh;
    width: 100%;
    padding: 3rem 15vw 1rem 15vw;

    @media (max-width: 600px) {
        padding: 3rem 1rem 1rem 1rem;
    }
`;
