import styled from "styled-components";

import { NewsHeadline } from "../../themes/base";

export const Container = styled.div`
  background: #f3f3f3;
  border-radius: 10px;
  margin-bottom: 20px;
  height: 120px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #333;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    border: 0;
    height: auto;
  }
`;

export const Title = styled(NewsHeadline)`
  text-align: center;
  line-height: 95%;
  font-size: 17px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  margin: 0;
`;
