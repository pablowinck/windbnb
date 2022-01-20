import styled from 'styled-components';

export const Container = styled.div``;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    user-select: none;

    margin-bottom: 2rem;
`;
export const Title = styled.div`
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text.dark};
    font-weight: bold;
`;
export const MoreStays = styled.div`
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text.main};
`;
export const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 2rem;
    align-items: center;
    justify-items: center;
`;
