import { LocationPin } from '@styled-icons/entypo/LocationPin';
import styled from 'styled-components';
export const Container = styled.div`
    padding: 1rem 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    color: ${(props) => props.theme.colors.text.dark};
    user-select: none;
`;

export const Locale = styled.div`
    cursor: pointer;
    display: flex;
    gap: 0.5rem;

    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${(props) => props.theme.colors.text.main};
    }
`;
export const LocaleIcon = styled(LocationPin)`
    width: 1rem;
`;
