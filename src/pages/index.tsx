import Layout from 'components/Layout';
import ModalContextProvider from 'context/ModalContext';
import StayContextProvider from 'context/StayContext';
import Head from 'next/head';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Windbnb</title>
            </Head>
            <main>
                <StayContextProvider>
                    <ModalContextProvider>
                        <Layout />
                    </ModalContextProvider>
                </StayContextProvider>
            </main>
        </>
    );
};

export default Home;
