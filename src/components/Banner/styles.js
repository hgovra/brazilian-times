import styled from "styled-components";

import Image from "../Image"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  color: #000;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Anchor = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  color: #fff;
  text-decoration: none;
`;
export const Photo = styled(Image)`
  width: 100%;
  height: 520px;

  @media screen and (max-width: 800px) {
    height: 70vh;
  }
`;

export const Title = styled.h3`
  display: block;
  text-transform: uppercase;
  font-style: italic;
  font-size: 28px;
  color: #000;
  text-align: center;
  padding: 0 20px 20px;
`;
