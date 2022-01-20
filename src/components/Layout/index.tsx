import Content from 'components/Content';
import Footer from 'components/Footer';
import SearchModal from 'components/SearchModal';
import Topbar from 'components/Topbar';
import { useModalContext } from 'context/ModalContext';
import React from 'react';
import { Container } from './styles';

const Layout: React.FC = () => {
    const { searchModal } = useModalContext();
    return (
        <Container>
            <Topbar />
            <Content />
            <Footer />
            {searchModal && <SearchModal />}
        </Container>
    );
};

export default Layout;
