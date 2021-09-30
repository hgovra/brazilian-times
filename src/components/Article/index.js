import { Container, Title, Thumb, Text } from "./styles";

const Article = ({ image, title, content, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
      <Thumb src={image} alt="" />
      <Text>{content}</Text>
    </Container>
  );
};

export default Article;
