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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
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
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>


</div>

    </>
  );
}

export default Home;