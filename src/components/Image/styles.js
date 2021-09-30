import styled from "styled-components";

export const Container = styled.div`
  background: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border-radius: 12px;
  font-size: 18px;
  color: #fff;
`;

export const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  filter: sepia(50%) contrast(150%) saturate(80%) brightness(100%) hue-rotate(-15deg);
`;
