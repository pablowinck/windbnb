import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
    height: 40vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 2;

    padding: 2.5rem 10vw;
`;
export const Overlay = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;
