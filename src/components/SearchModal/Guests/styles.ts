import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    margin-left: 40vw;
    padding-top: 1rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text.main};
`;
export const Title = styled.div`
    color: ${(props) => props.theme.colors.text.dark};

    font-weight: bold;
`;
export const SubTitle = styled.div``;
export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
`;
export const Button = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: grid;
    place-items: center;
    border-radius: 6px;

    border: 1px solid ${(props) => props.theme.colors.text.dark};
    color: ${(props) => props.theme.colors.text.dark};
    cursor: pointer;
    user-select: none;

    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${(props) => props.theme.colors.primary.light};
        color: white;
    }
`;
