import { useStayContext } from 'context/StayContext';
import React from 'react';
import {
    Container,
    GuestsInput,
    Label,
    LocationInput,
    SearchButton,
    SearchIcon,
    Title
} from './styles';

type Props = {
    selected: string;
    setSelected: (selected: string) => void;
};

const Inputs: React.FC<Props> = ({ selected, setSelected }) => {
    const { location, guests } = useStayContext();
    return (
        <Container>
            <LocationInput onClick={() => setSelected('location')}>
                <Title>
                    {selected === 'location' && '> '}
                    LOCATION
                </Title>
                <Label>{location}</Label>
            </LocationInput>
            <GuestsInput onClick={() => setSelected('guests')}>
                <Title>
                    {selected === 'guests' && '> '}
                    GUESTS
                </Title>
                <Label>{guests}</Label>
            </GuestsInput>
            <SearchButton>
                <SearchIcon />
                <p>Search</p>
            </SearchButton>
        </Container>
    );
};

export default Inputs;
