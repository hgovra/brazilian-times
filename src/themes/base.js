import styled from "styled-components";

export const Container = styled.div`
  width: 1024px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  &>div:nth-child(1) section {
    border: 0;
    margin-left: 0;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SubColumns = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LargeColumn = styled.div`
  flex: 2;

  @media screen and (max-width: 800px) {
    flex: 1;
  }

  & > section {
    margin: 0;
  }
`;
export const SmallColumn = styled.div`
  flex: 1;
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }

  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const Category = styled.section`
  border-left: 1px solid #CCC;
  padding-left: 20px;

  &:first-of-type {
    padding-left: 0;
  }

  &.side-col {
    padding-left: 20px;
  }

  @media screen and (max-width: 800px) {
    padding: 0;
    border: 0;

    &.side-col {
      padding-left: 0;
    }
  }
`;

export const CatHeadline = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  color: #666;
  padding: 6px 0;
  border: 2px solid #CCC;
  border-left: 0;
  border-right: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: 'Passion One', cursive;
  text-align: center
`;
export const NewsHeadline = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Footer = styled.div`
  border-top: 3px solid #000;
  border-bottom: 2px solid #888;
  margin: 0 auto 20px;
  height: 30px;

  @media screen and (max-width: 800px) {
        margin: 0 0 20px;
    }
`;