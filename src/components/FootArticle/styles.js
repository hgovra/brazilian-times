import styled from "styled-components";

import { NewsHeadline } from "../../themes/base";

import Image from "../Image";

export const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  color: #333;
  cursor: pointer;

  .sports & {
    padding-left: 20px;
  }

  &:first-of-type {
    border: 0;
    padding-left: 0;
  }

  @media screen and (max-width: 800px) {
    padding-left: 0;
    padding-top: 20px;
    padding-bottom: 10px;
    border-top: 1px solid #666;

    .sports & {
      padding-left: 0;
    }

    &:first-of-type {
      border: 0;
    }

    .sports &:first-of-type {
      padding-top: 10px;
    }
  }
`;

export const Thumb = styled(Image)`
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
`;

export const Title = styled(NewsHeadline)`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 800px) {
    height: auto;
  }
`;
