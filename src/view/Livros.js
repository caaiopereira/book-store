import React, {useState, useEffect} from "react"
import axios from 'axios'
import {Table, Button, Form} from "reactstrap";
import './css/Livros.css'

{/*function Livros() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://desenvolvendo-servidor-json.vercel.app/livros")
        .then((response) => {
            setPosts(response.data)
        })

        .catch(() => {
            console.log("Deu errado")
        })

    }, [])

}*/}

class Livros extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            livros : []
        }
    }

    componentDidMount(){
        this.buscarLivros();              
    }

    componentWillUnmount(){
        
    }

    buscarLivros = () => {
        fetch("https://desenvolvendo-servidor-json.vercel.app/livros")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({livros : dados})
        })  
    }

    deletarLivros = (id) => {
        fetch("https://desenvolvendo-servidor-json.vercel.app/livros"+id, {method: 'DELETE'})
        .then(resposta => {
            if(resposta.ok){
                this.buscarLivros();
            }
        })  
    }

    render(){
        return(
            <Table striped>
                <thead>
                    <tr>
                        <th>Nome do Livro</th>
                        <th>Autor</th>
                        <th>Editora</th>
                        <th>Idioma</th>
                        <th>Páginas</th>
                        <th>Ano de Edição</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.livros.map((livros) =>
                        <tr>
                            <td>{livros.nome}</td>
                            <td>{livros.autor}</td>
                            <td>{livros.editora}</td>
                            <td>{livros.idioma}</td>
                            <td>{livros.paginas}</td>
                            <td>{livros.ano}</td>
                            <td>Atualizar   <Button color="danger" onClick={() => this.deletarLivros(livros.id)}>Excluir</Button></td>
                        </tr>
                        )
                    }
                    
                </tbody>
            </Table>
            
        )
    }
}

export default Livros;