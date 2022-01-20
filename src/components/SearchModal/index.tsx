import { useModalContext } from 'context/ModalContext';
import React from 'react';
import { Container, Overlay } from './styles';

const SearchModal: React.FC = () => {
    const { setSearchModal } = useModalContext();
    return (
        <>
            <Container />
            <Overlay onClick={() => setSearchModal(false)} />
        </>
    );
};

export default SearchModal;
