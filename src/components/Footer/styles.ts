import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    font-size: 0.875rem;

    color: ${(props) => props.theme.colors.text.main};
    a {
        font-weight: bold;
        color: ${(props) => props.theme.colors.text.main};
    }
`;
