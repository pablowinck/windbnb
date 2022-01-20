import Layout from 'components/Layout';
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
                    <Layout />
                </StayContextProvider>
            </main>
        </>
    );
};

export default Home;
