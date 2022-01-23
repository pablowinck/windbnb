import { useModalContext } from 'context/ModalContext';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Guests from './Guests';
import Inputs from './Inputs';
import Locations from './Locations';
import { Container, Overlay } from './styles';

const SearchModal: React.FC = () => {
    const [selected, setSelected] = useState('location');
    const { setSearchModal } = useModalContext();
    return (
        <>
            <Container
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Inputs setSelected={setSelected} selected={selected} />
                {selected === 'location' ? <Locations /> : <Guests />}
            </Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Overlay onClick={() => setSearchModal(false)} />
            </motion.div>
        </>
    );
};

export default SearchModal;
