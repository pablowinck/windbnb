import StayItem from 'components/StayItem';
import { useStayContext } from 'context/StayContext';
import React from 'react';
import { Container, Header, Items, MoreStays, Title } from './styles';

const Content: React.FC = () => {
    const { stays, location } = useStayContext();
    return (
        <Container>
            <Header>
                <Title>Stays in {location}</Title>
                <MoreStays>{stays.length}+ stays</MoreStays>
            </Header>
            <Items>
                {stays.map(
                    (stay, key) => key < 6 && <StayItem key={key} stay={stay} />
                )}
            </Items>
        </Container>
    );
};

export default Content;
