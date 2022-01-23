import { Search } from '@styled-icons/bootstrap/Search';
import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    width: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 1rem;
    color: ${(props) => props.theme.colors.text.main};

    padding: 1rem 0 1rem 2rem;
    user-select: none;
    cursor: pointer;
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    height: 4rem;
    font-size: 1rem;
`;

export const LocationInput = styled(Input)`
    width: 35vw;
`;
export const Title = styled.div`
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text.dark};
`;
export const Label = styled.div``;
export const GuestsInput = styled(Input)`
    width: 25vw;
`;
export const SearchButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    height: 4rem;
    width: 8rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.primary.main};

    color: white;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.light};
    }
`;
export const SearchIcon = styled(Search)`
    width: 1.3rem;
`;
