import { Container, Title, Photo } from "./styles";

const Banner = ({ image, title, link, onClick }) => {
  return (
    <Container>
      {image ? (
        <div onClick={onClick}>
          <Title>{title}</Title>

          <Photo src={image} alt="" />
        </div>
      ) : (
        ``
      )}
    </Container>
  );
};

export default Banner;
