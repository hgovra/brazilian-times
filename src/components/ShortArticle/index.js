import { Container, Title } from "./styles";

const ShortArticle = ({ title, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ShortArticle;
