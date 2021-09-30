import { Container, Title, Thumb } from "./styles";

const FootArticle = ({ image, title, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Thumb src={image} alt="" />
      <Title>{title}</Title>
    </Container>
  );
};

export default FootArticle;
