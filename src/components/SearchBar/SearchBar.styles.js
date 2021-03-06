import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
        position: absolute;
        left: 15px;
        top: 15px;
        width: 30px;
    }

    input {
        position: absolute;
        width: 95%;
        height: 40px;
        left: 0;
        background: transparent;
        margin: 8px 0;
        padding: 0 0 0 60px;
        font-size: var(--fontBig);
        color: var(--white);
        border: 0;

        :focus {
            outline: none;
        }
    }
`;