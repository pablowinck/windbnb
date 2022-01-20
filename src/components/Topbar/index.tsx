import { useModalContext } from 'context/ModalContext';
import React from 'react';
import {
    Container,
    Guests,
    Location,
    Logotipo,
    SearchButton,
    SearchContent,
    SearchIcon
} from './styles';

const Topbar: React.FC = () => {
    const { setSearchModal } = useModalContext();
    return (
        <Container>
            <Logotipo
                src="/logo.svg"
                alt="Logotipo do projeto"
                height={100}
                width={100}
            />

            <SearchContent onClick={() => setSearchModal(true)}>
                <Location>Set location</Location>
                <Guests>Add guests</Guests>
                <SearchButton>
                    <SearchIcon />
                </SearchButton>
            </SearchContent>
        </Container>
    );
};

export default Topbar;
