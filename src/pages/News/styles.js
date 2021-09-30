import styled from "styled-components";

export const Title = styled.h3`
  display: block;
  font-size: 32px;
  color: #000;
  padding: 0 0 20px;

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const Date = styled.span`
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 115%;
  font-weight: 700;
  color: #999;
  margin-bottom: 20px;
  font-size: 14px;
  display: block;

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const Content = styled.article`
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 115%;
  margin-bottom: 20px;

  & h2, h3, h4, h5, blockquote {
    margin-bottom: 10px;
    margin-top: 20px;
    font-weight: 700;
    font-size: 18px;
  }

  & p, .toolkit-image-container__info {
    margin-bottom: 10px;
  }

  & a {
    color: #666;
    font-weight: 700;
  }

  & img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 10px;
    filter: sepia(50%) contrast(150%) saturate(80%) brightness(100%) hue-rotate(-15deg);
  }

  & figure, .toolkit-image-container__edges {
    margin-top: 20px;
  }

  & figcaption, .content-media__description, .responsive-img-caption  {
    font-size: 12px;
    margin: -10px 0 20px;
  }

  & ul li, ol li {
    list-style: square;
    margin-left: 30px;
    font-size: 14px;
    margin-bottom: 10px;
  }
  & ol li {
    list-style: decimal;
  }
`;
