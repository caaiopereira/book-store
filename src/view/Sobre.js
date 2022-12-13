import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './css/Sobre.css'

const Sobre = () => {
    return (
      <>
    <div className='p-5 text-center bannerStyle'>
    <h1 className='mb-3'>Heading</h1>
    <h4 className='mb-3'>Subheading</h4>
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
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </MDBCol>
        <MDBCol size='md'>
        <img
            alt="logo"
            src="https://images.vexels.com/media/users/3/229082/isolated/preview/6fabc24c3830d75486725cc6d786dfbb-logotipo-dos-circulos-do-livro.png"
            style={{
              height: 400,
              width: 400
            }}/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </MDBCol>
        <MDBCol size='md'>
        <img
            alt="logo"
            src="https://images.vexels.com/media/users/3/229082/isolated/preview/6fabc24c3830d75486725cc6d786dfbb-logotipo-dos-circulos-do-livro.png"
            style={{
              height: 400,
              width: 400
            }}/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </MDBCol>
      </MDBRow>
    </MDBContainer>


  </>
  );
  };
  
  export default Sobre;