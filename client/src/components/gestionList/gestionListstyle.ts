import styled from "styled-components";
import { colors } from "../../colors";

export const ButtonDouble = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonLeft = styled.div`
    background-color : '#fff';
    border : 1px solid ${colors.dark};
    border-radius : 10px 0 0 10px;
    padding : 10px;
    cursor: pointer;
    font-weight: bold;
    &.active {
        background-color: ${colors.light};
        color: ${colors.mediumlight};
    }
`;

export const ButtonRight = styled.div`
    border : 1px solid ${colors.dark};
    border-radius : 0 10px 10px 0;
    padding : 10px;
    cursor: pointer;
    font-weight: bold;
    &.active {
        background-color: ${colors.light};
        color: ${colors.mediumlight};
    }
`;