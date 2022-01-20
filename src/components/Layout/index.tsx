import Content from 'components/Content';
import Footer from 'components/Footer';
import Topbar from 'components/Topbar';
import React from 'react';
import { Container } from './styles';

const Layout: React.FC = () => {
    return (
        <Container>
            <Topbar />
            <Content />
            <Footer />
        </Container>
    );
};

export default Layout;
