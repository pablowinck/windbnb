import { Stay } from 'context/StayContext';
import React from 'react';
import {
    Beds,
    Container,
    Infos,
    Photo,
    StarIcon,
    Stars,
    SuperHost,
    Title,
    Type
} from './styles';

type Props = {
    stay: Stay;
};

const StayItem: React.FC<Props> = ({ stay }) => {
    console.log(stay);
    return (
        <Container>
            <Photo image={stay.photo} />
            <Infos>
                <Type>
                    {stay.superHost && <SuperHost />}
                    {stay.type}.
                    <Beds>
                        {stay.beds ? stay.beds : 1}
                        {stay.beds > 1 ? <span>beds</span> : <span>bed</span>}
                    </Beds>
                </Type>
                <Stars>
                    <StarIcon />
                    {stay.rating}
                </Stars>
            </Infos>
            <Title>{stay.title}</Title>
        </Container>
    );
};

export default StayItem;
