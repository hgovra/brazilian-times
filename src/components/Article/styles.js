import styled from "styled-components";

import { NewsHeadline } from "../../themes/base";

import Image from "../Image";

export const Container = styled.div`
  font-size: 16px;
  width: 100%;
  position: relative;  
  padding: 20px 0 0 0;
  border-top: 1px solid #999;
  cursor: pointer;
  
  .sports & {
    padding-left: 20px;
    border: 0;
  }

  &:first-of-type {
    border: 0;
    padding-top: 0;
    padding-left: 0;
  }

  @media screen and (max-width: 800px) {
    padding-left: 0;
    padding-top: 20px;
    border-top: 1px solid #666;

    .sports & {
      padding-left: 0;
    }

    &:first-of-type {
      border: 0;
    }

    .sports &:first-of-type {
      padding-top: 20px;
    }
  }
`;

export const Anchor = styled.a`
  width: 100%;
  height: 100%;
  color: #333;
  text-decoration: none;
`;

export const Thumb = styled(Image)`
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
`;

export const Title = styled(NewsHeadline)`
  font-size: 20px;
  text-align: center;
`;
export const Text = styled.p`
  font-size: 14px;
  line-height: 110%;
  margin: 10px 0 20px;
  text-align: center;
  font-family: 'IBM Plex Sans', sans-serif;
`;
