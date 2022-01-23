import { useModalContext } from 'context/ModalContext';
import { useStayContext } from 'context/StayContext';
import React from 'react';
import {
    Container,
    Guests,
    Location,
    Logotipo,
    SearchButton,
    SearchContent,
    SearchIcon,
    Title
} from './styles';

const Topbar: React.FC = () => {
    const { setSearchModal } = useModalContext();
    const { location, guests } = useStayContext();
    return (
        <Container>
            <Logotipo
                src="/logo.svg"
                alt="Logotipo do projeto"
                height={100}
                width={100}
            />

            <SearchContent onClick={() => setSearchModal(true)}>
                <Location>
                    <Title>location</Title>
                    <p>{location}</p>
                </Location>
                <Guests>
                    <Title>guests</Title>
                    <p>{guests === 0 ? 'Add guests' : guests}</p>
                </Guests>
                <SearchButton>
                    <SearchIcon />
                </SearchButton>
            </SearchContent>
        </Container>
    );
};

export default Topbar;
