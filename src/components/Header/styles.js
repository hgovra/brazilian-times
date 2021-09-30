import styled from 'styled-components'

export const Bar = styled.header`
    padding: 0 0 4px;
    text-align: center;
    border-top: 2px solid #888;
    border-bottom: 2px solid #888;
    margin: 20px 0 30px;

    & > a {
        text-decoration: none;
        color: #111;
    }

    @media screen and (max-width: 800px) {
        margin: 20px 0;
    }
`;

export const Title = styled.h1`
    text-align: center;
    font-family: 'UnifrakturCook', cursive;
    font-size: 120px;
    line-height: 72px;
    width: 100%;
    letter-spacing: -2px;
    padding-bottom: 23px;
    padding-top: 24px;
    border-bottom: 3px solid #000;

    @media screen and (max-width: 800px) {
        font-size: 90px;
        line-height: 74px;
        padding-bottom: 6px;
        padding-top: 6px;
    }
`;
export const Info = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 0;
    }
`;

export const Center = styled.span`
    display: block;
    flex: 2;
    font-size: 22px;

    @media screen and (max-width: 800px) {
        margin: 0 20px;
        padding: 10px;
        text-align: center;
        flex: 1;
        font-size: 18px;
    }
`;
export const Left = styled(Center)`
    text-align: left;
    flex: 1;

    @media screen and (max-width: 800px) {
        border-bottom: 1px solid #666;
        text-align: center;
    }
`;
export const Right = styled(Center)`
    text-align: right;
    flex: 1;

    @media screen and (max-width: 800px) {
        border-top: 1px solid #666;
        text-align: center;
    }
`;