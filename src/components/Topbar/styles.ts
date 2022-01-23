import { Search } from '@styled-icons/bootstrap/Search';
import Image from 'next/image';
import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logotipo = styled(Image)``;
export const SearchContent = styled.div`
    width: 18.75rem;
    height: 3.45rem;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;

    display: flex;
`;

const ParamsField = styled.div`
    border-right: 1px solid #e6e6e6;
    height: 100%;

    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text.main};
    user-select: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    padding: 0.75rem;

    cursor: pointer;
`;

export const Location = styled(ParamsField)`
    width: 8.6rem;
`;
export const Guests = styled(ParamsField)`
    width: 6.6rem;
`;
export const SearchButton = styled.div`
    display: grid;
    place-items: center;
    width: 3.54rem;
    cursor: pointer;

    border-radius: 0 1rem 1rem 0;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.text.light};
    }
`;

export const SearchIcon = styled(Search)`
    width: 1rem;
    color: ${(props) => props.theme.colors.primary.main};
`;

export const Title = styled.div`
    font-size: 0.65rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text.dark};
`;
