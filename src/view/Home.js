import {Card, CardBody, CardTitle, CardText, Button, CardSubtitle  } from 'reactstrap';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './css/Home.css'
import { click } from '@testing-library/user-event/dist/click';

import invest from './img/educacao/Investimentos Inteligentes.png'
import pai from './img/educacao/Pai Rico Pai Pobre.png';
import brilhantes from './img/educacao/Pais Brilhantes, Professores Fascinantes.png';
import pedagogia from './img/educacao/Pedagogia do Oprimido.png';

import historia from './img/esporte&lazer/A História do Futebol para quem tem pressa.png';
import federer from './img/esporte&lazer/Federer.png';
import guardiola from './img/esporte&lazer/Guardiola confidencial.png';
import vitoria from './img/esporte&lazer/O algoritmo da vitória.png';

import garota from './img/ficcao/A Garota do Lago.png';
import bicho from './img/ficcao/A Revolução dos Bichos.png';
import acaba from './img/ficcao/É Assim que Acaba.png';
import diario from './img/ficcao/O Diário Perdido de Gravity Falls.png';

import one from './img/banner/1.jpg';
import two from './img/banner/2.jpg';
import three from './img/banner/3.jpg';

const items = [
  {
    src: one
  },
  {
    src: two  
  },
  {
    src: three
  },
];

function Home(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);


  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
    <div className="marginNav">
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </div>


{/* ///////////////////////////////////////////////////// */}

<div className='faixaStyle'>
    <h3>EDUCAÇÃO</h3>
</div>


{/* //////////////////////////////////////////////////////////////////////////// */}


<div className="cardStyle">
    <Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img alt="Sample" src={invest} />

      <CardBody>
        <CardTitle tag="h5">
          Investimentos Inteligentes
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Gustavo Cerbasi
        </CardSubtitle>
        <CardText>
        Estratégias para multiplicar seu patrimônio com segurança e eficiência.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>

  <Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={pai}
      />
      <CardBody>
        <CardTitle tag="h5">
        Pai Rico, Pai Pobre
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Robert T. Kiyosaki
        </CardSubtitle>
        <CardText>
        Celebrando 20 anos com o livro n° 1 em finanças pessoais.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>



    <Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={brilhantes}
      />
      <CardBody>
        <CardTitle tag="h5">
        Pais brilhantes, professores fascinantes
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Augusto Cury
        </CardSubtitle>
        <CardText>
        Os pais e os professores lutam pelo mesmo sonho: tornar seus filhos e alunos felizes, saudáveis e sábios. Mas jamais estiveram tão perdidos na árdua tarefa de educar.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>



    <Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={pedagogia}
      />
      <CardBody>
        <CardTitle tag="h5">
        Pedagogia do Oprimido
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Paulo Freire
        </CardSubtitle>
        <CardText>
        Clássico do Patrono da Educação, Pedagogia do oprimido é uma das obras de ciências sociais e humanas mais citadas no mundo.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>
</div>


{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

<div className='faixaStyle'>
    <h3>ESPORTE</h3>
</div>

<div className="cardStyle">
<Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={historia}
      />
      <CardBody>
        <CardTitle tag="h5">
        A História do Futebol para quem tem pressa
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Márcio Trevisan
        </CardSubtitle>
        <CardText>
        Uma das mais conhecidas frases do mundo da bola diz que, no futebol, a velocidade é essencial, mas a pressa... totalmente dispensável.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>


<Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={federer}
      />
      <CardBody>
        <CardTitle tag="h5">
        Federer
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Christopher Clarey
        </CardSubtitle>
        <CardText>
        A biografia definitiva de um verdadeiro campeão e um ídolo que segue fazendo história.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>



    <Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={guardiola}
      />
      <CardBody>
        <CardTitle tag="h5">
        Guardiola confidencial
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Perarnau Martí
        </CardSubtitle>
        <CardText>
        Josep Guadiola i Sala, ou simplesmente Pep Guardiola, o nome que o futebol consagrou, é o personagem central do livro.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>




    <Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={vitoria}
      />
      <CardBody>
        <CardTitle tag="h5">
        O algoritmo da vitória
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          José Salibi Neto
        </CardSubtitle>
        <CardText>
        Todos nós colecionamos vitórias e derrotas na vida. A diferença está em aumentar as chances de vencer. Nada melhor do que os esportes de alta performance para ensinar isso.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>


</div>

{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

<div className='faixaStyle'>
    <h3>FICÇÃO</h3>
</div>

<div className="cardStyle">
<Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={garota}
      />
      <CardBody>
        <CardTitle tag="h5">
        A garota do lago
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Charlie Donlea
        </CardSubtitle>
        <CardText>
        Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada. Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>


<Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={bicho}
      />
      <CardBody>
        <CardTitle tag="h5">
        A revolução dos bichos
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          George Orwell
        </CardSubtitle>
        <CardText>
        Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>



    <Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={acaba}
      />
      <CardBody>
        <CardTitle tag="h5">
        É assim que acaba
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Colleen Hoover
        </CardSubtitle>
        <CardText>
        Considerado o livro do ano, que virou febre no TikTok e sozinho já acumulou mais de um milhão de exemplares vendidos no Brasil. É assim que acaba é o romance mais pessoal da carreira de Colleen Hoover, discutindo temas como violência doméstica e abuso psicológico de forma sensível e direta. 
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>




    <Card
      color="secondary"
      outline
      style={{
        width: '18rem'
      }}
    >
      <img
        alt="Sample"
        src={diario}
      />
      <CardBody>
        <CardTitle tag="h5">
        O Diário Perdido de Gravity Falls
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Alex Hirsch
        </CardSubtitle>
        <CardText>
        Você possui em suas mãos o cobiçado diário do autor da série Gravity Falls, um tesouro de 288 páginas coloridas e sem dono, com segredos nunca antes revelados, monstros e mistérios da pacata cidade do Tivô Stan.
        </CardText>
        <Button>
          Confira
        </Button>
      </CardBody>
    </Card>


</div>

    </>
  );
}

export default Home;