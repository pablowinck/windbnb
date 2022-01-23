import { staysData } from 'data/stays';
import { createContext, FC, useContext, useEffect, useState } from 'react';

export type Stay = {
    city: string;
    country: string;
    superHost: boolean;
    title: string;
    rating: number;
    maxGuests: number;
    type: string;
    beds: number;
    photo: string;
};

type StayContextType = {
    stays: Stay[];
    setStays: (stays: Stay[]) => void;
    location: string;
    setLocation: (location: string) => void;
    guests: number;
    setGuests: (guests: number) => void;
    allLocations: string[];
};

const StayContext = createContext({} as StayContextType);

const handleAllLocations = (currentStays: Stay[]): string[] => {
    let locations: string[] = [];
    currentStays.forEach((stay) => {
        if (!locations.includes(stay.city + ', ' + stay.country)) {
            locations.push(stay.city + ', ' + stay.country);
        }
    });
    return locations;
};

const StayContextProvider: FC = ({ children }) => {
    const [stays, setStays] = useState<Stay[]>(staysData);
    const [allLocations, setAllLocations] = useState<string[]>(
        handleAllLocations(staysData)
    );
    const [guests, setGuests] = useState<number>(0);
    const [location, setLocation] = useState<string>(allLocations[0]);

    useEffect(() => {
        const filteredStays = staysData.filter((stay) => {
            const locationMatch = stay.city
                .toLowerCase()
                .includes(location.toLowerCase().split(',')[0]);
            const guestsMatch = stay.maxGuests >= guests;

            return locationMatch && guestsMatch;
        });

        setStays(filteredStays);
    }, [location, guests]);

    const value = {
        stays: stays,
        setStays: setStays,
        location: location,
        setLocation: setLocation,
        guests: guests,
        setGuests: setGuests,
        allLocations: allLocations
    };

    return (
        <StayContext.Provider value={value}>{children}</StayContext.Provider>
    );
};

export const useStayContext = () => {
    const context = useContext(StayContext);

    if (!context) {
        throw new Error(
            'useStayContext must be used within a StayContextProvider'
        );
    }

    return context;
};

export default StayContextProvider;
