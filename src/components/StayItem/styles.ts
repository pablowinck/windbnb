import { StarFill } from '@styled-icons/bootstrap/StarFill';
import styled from 'styled-components';
export const Container = styled.div``;
export const Photo = styled.div<{ image: string }>`
    width: 24.7rem;
    height: 16.81rem;

    background: url(${(props) => props.image}) no-repeat center;
    background-size: cover;

    border-radius: 1.5rem;
`;
export const Infos = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 1rem 0.5rem;
`;
export const Type = styled.div`
    display: flex;

    align-items: center;
    gap: 0.75rem;

    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text.main};
`;
export const SuperHost = styled.div`
    width: 6.25rem;
    height: 1.75rem;

    display: grid;
    place-items: center;

    border: 1px solid ${(props) => props.theme.colors.text.dark};
    border-radius: 0.75rem;

    ::after {
        content: 'SUPER HOST';
        font-size: 0.75rem;
        color: ${(props) => props.theme.colors.text.dark};
    }
`;
export const Stars = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;
export const StarIcon = styled(StarFill)`
    width: 1rem;
    color: ${(props) => props.theme.colors.primary.main};
`;
export const Title = styled.div`
    font-size: 1rem;
    font-weight: bold;
    padding: 0 0.5rem;
    color: ${(props) => props.theme.colors.text.dark};
`;

export const Beds = styled.div`
    display: flex;
    gap: 0.2rem;
`;
