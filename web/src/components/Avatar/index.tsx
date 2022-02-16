import React from "react";

import { Container, Background, Image } from "./styles";

interface Props {
  url: string;
}

const Avatar: React.FC<Props> = ({ url }) => {
  return (
    <Container>
      <Background>
        <Image src={url} alt="Avatar Image" />
      </Background>
    </Container>
  );
};

export default Avatar;
