import { FormGroup, Form, Row, Col, Label, Input, Button } from 'reactstrap';
import './css/Sobre.css'

const Contatos = () => {
    return (
      <>
      <div className='p-5 text-center bannerStyle'>
    <h1 className='mb-3'>Contato</h1>
    <h4 className='mb-3'>Entre em Contato Conosco</h4>
  </div>
      
      <Form className="container margin-text">
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="digite seu e-mail"
          type="email"
          required
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Senha
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="digite sua senha"
          type="password"
          required
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
    <Label for="exampleAddress">
      Endereço
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="Rua Bruxelas, 720"
      required
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleAddress2">
      Complemento
    </Label>
    <Input
      id="exampleAddress2"
      name="address2"
      placeholder="Bloco, Apartamento, Andar"
      required
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleCity">
          Cidade
        </Label>
        <Input
          id="exampleCity"
          name="city"
          required
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleState">
          Estado
        </Label>
        <Input
          id="exampleState"
          name="state"
          required
        />
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="exampleZip">
          CEP
        </Label>
        <Input
          id="exampleZip"
          name="zip"
          required
        />
      </FormGroup>
    </Col>
  </Row>
  <Button>
    Enviar
  </Button>
</Form>
</>
    );
  };
  
  export default Contatos;