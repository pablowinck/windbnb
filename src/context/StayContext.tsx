import { staysData } from 'data/stays';
import { createContext, FC, useContext, useState } from 'react';

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
};

const StayContext = createContext({} as StayContextType);

const StayContextProvider: FC = ({ children }) => {
    const [stays, setStays] = useState<Stay[]>(staysData);
    const [location, setLocation] = useState<string>('');
    const [guests, setGuests] = useState<number>(0);

    const value = {
        stays: stays,
        setStays: setStays,
        location: location,
        setLocation: setLocation,
        guests: guests,
        setGuests: setGuests
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
