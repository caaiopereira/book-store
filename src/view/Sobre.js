import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './css/Sobre.css'

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
            src="https://images.vexels.com/media/users/3/229082/isolated/preview/6fabc24c3830d75486725cc6d786dfbb-logotipo-dos-circulos-do-livro.png"
            style={{
              height: 400,
              width: 400
            }}/>
       Contribuir para o desenvolvimento pessoal e profissional através do conhecimento.
Descobrir, apoiar e promover o talento literário, objetivando oferecer aos leitores de todo do Brasil e do mundo obras publicadas nos mais diversos gêneros, todas com qualidade e estética exemplar.

        </MDBCol>
        <MDBCol size='md'>
        <img
            alt="logo"
            src="https://images.vexels.com/media/users/3/229082/isolated/preview/6fabc24c3830d75486725cc6d786dfbb-logotipo-dos-circulos-do-livro.png"
            style={{
              height: 400,
              width: 400
            }}/>
       Ser uma empresa de atuação nacional e reconhecida como a melhor do segmento.
Promover a leitura e, em parceria com nossos autores, divulgar conteúdos que entretenham e inspirem a todos viver mais e melhor
        </MDBCol>
        <MDBCol size='md'>
        <img
            alt="logo"
            src="https://images.vexels.com/media/users/3/229082/isolated/preview/6fabc24c3830d75486725cc6d786dfbb-logotipo-dos-circulos-do-livro.png"
            style={{
              height: 400,
              width: 400
            }}/>
        Incentivo à leitura, ao desenvolvimento humano e à construção de uma sociedade melhor;
Trabalho em equipe com profissionalismo, competência, entusiasmo e inovação.
        </MDBCol>
      </MDBRow>
    </MDBContainer>


  </>
  );
  };
  
  export default Sobre;