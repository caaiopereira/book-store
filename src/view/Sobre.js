import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './css/Sobre.css'

import mission from './img/banner/missao.png';
import values from './img/banner/valores.png';
import vision from './img/banner/visao.png';

const Sobre = () => {
    return (
      <>
    <div className='p-5 text-center bannerStyle'>
    <h1 className='mb-3'>Sobre Nós</h1>
    <h4 className='mb-3'>Missão, Visão e Valores</h4>
  </div>

  <MDBContainer className="margin-text">
      <MDBRow >
        <MDBCol size='md' >
        <img
            alt="logo"
            src= {mission}
            style={{
              height: 400,
              width: 400
            }}/>
      <h4 className="styleVVM"> Contribuir para o desenvolvimento pessoal e profissional através do conhecimento.
Descobrir, apoiar e promover o talento literário, objetivando oferecer aos leitores de todo do Brasil e do mundo obras publicadas nos mais diversos gêneros, todas com qualidade e estética exemplar.</h4>
        </MDBCol>
        <MDBCol size='md'>
        <img
            alt="logo"
            src={vision}
            style={{
              height: 400,
              width: 400
            }}/>
            <h4  className="styleVVM">Ser uma empresa de atuação nacional e reconhecida como a melhor do segmento.
        Promover a leitura e, em parceria com nossos autores, divulgar conteúdos que entretenham e inspirem a todos viver mais e melhor</h4>
        </MDBCol>
        <MDBCol size='md'>
        <img
            alt="logo"
            src={values}
            style={{
              height: 400,
              width: 400
            }}/>
            <h4  className="styleVVM">Incentivo à leitura, ao desenvolvimento humano e à construção de uma sociedade melhor;
        Trabalho em equipe com profissionalismo, competência, entusiasmo e inovação.</h4>
        </MDBCol>
      </MDBRow>
    </MDBContainer>


  </>
  );
  };
  
  export default Sobre;
