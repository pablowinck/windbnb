import { useStayContext } from 'context/StayContext';
import React from 'react';
import { Button, Container, Content, SubTitle, Title } from './styles';

const Guests: React.FC = () => {
    const { guests, setGuests } = useStayContext();

    const handleSubGuest = () => {
        setGuests(guests === 0 ? 0 : guests - 1);
    };
    const handleMoreGuest = () => {
        setGuests(guests + 1);
    };
    return (
        <Container>
            <Title>Guests</Title>
            <SubTitle>How many guests</SubTitle>

            <Content>
                <Button onClick={handleSubGuest}>-</Button>
                {guests}
                <Button onClick={handleMoreGuest}>+</Button>
            </Content>
        </Container>
    );
};

export default Guests;
