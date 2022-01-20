import { createContext, useContext, useState } from 'react';

type ModalContextType = {
    searchModal: boolean;
    setSearchModal: (searchModal: boolean) => void;
};

const ModalContext = createContext({} as ModalContextType);

const ModalContextProvider: React.FC = ({ children }) => {
    const [searchModal, setSearchModal] = useState<boolean>(false);

    const value = {
        searchModal: searchModal,
        setSearchModal: setSearchModal
    };

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
};

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error(
            'useModalContext must be used within a ModalContextProvider'
        );
    }

    return context;
};

export default ModalContextProvider;
