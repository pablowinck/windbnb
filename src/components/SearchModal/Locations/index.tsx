import { useStayContext } from 'context/StayContext';
import React from 'react';
import { Container, Locale, LocaleIcon } from './styles';

const Locations: React.FC = () => {
    const { allLocations, setLocation } = useStayContext();
    return (
        <Container>
            {allLocations.map((location, index) => (
                <Locale key={index} onClick={() => setLocation(location)}>
                    <LocaleIcon />
                    <p>{location}</p>
                </Locale>
            ))}
        </Container>
    );
};

export default Locations;
