import { Container, Photo } from "./styles";

const Image = ({ src, alt, color, className }) => {
  return (
    <Container className={className} color={color}>
      {src ? (
        <Photo src={src} alt={alt} />
      ) : (
        ``
      )}
    </Container>
  );
};

export default Image;
