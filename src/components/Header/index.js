import { Link } from 'react-router-dom';

import { Bar, Title, Info, Left, Center, Right } from "./styles";

const Header = () => {
  const Today = new Date();
  const Months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const Days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

  return (
    <Bar>
      <Link to="/">
        <Title>Brazilian Times</Title>
      </Link>

      <Info>
        <Left>No. 54{Math.floor(Math.random() * 99) + 10}</Left>
        <Center>{Days[Today.getDay()]}, {Today.getDate()} de {Months[Today.getMonth()]} de {Today.getFullYear()}</Center>
        <Right>Powered by News API</Right>
      </Info>
    </Bar>
  );
};

export default Header;
