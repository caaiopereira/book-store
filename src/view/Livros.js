import React, {useState, useEffect} from "react"
import axios from "axios";
import {Table, Button, Form} from "reactstrap";
import './css/Livros.css'

/*function Livros() {
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
}*/

// class Livros extends React.Component{

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         livros : []
    //     }
    // }

    // componentDidMount(){
    //     this.buscarLivros();              
    // }

    // componentWillUnmount(){
        
    // }

    // buscarLivros = () => {
    //     fetch("https://desenvolvendo-servidor-json.vercel.app/livros")
    //     .then(resposta => resposta.json())
    //     .then(dados => {
    //         this.setState({livros : dados})
    //     })  
    // }




    

    // deletarLivros = (id) => {
    //     fetch("https://desenvolvendo-servidor-json.vercel.app/livros"+id, {method: 'DELETE'})
    //     .then(resposta => {
    //         if(resposta.ok){
    //             this.buscarLivros();
    //         }
    //     })  
    // }


    const baseURL = "https://desenvolvendo-servidor-json.vercel.app/livros";

    function Livros() {
        const [livros, setPost] = useState([]);
        
        console.log(livros);

        React.useEffect(() => {
            axios.get(`${baseURL}`).then((response) => {
              setPost(response.data);
            });
          }, []);

        

        //   function getPost(){
              
        //     axios.get(`${baseURL}`).then((response) => {
        //         setPost(response.data);
                
        //       });

        //   }

          function deletePost(id) {
                axios.delete(`${baseURL}/${id}`).then(() => {
                    setPost(null);

                  });
                 
          }

          if (!livros) return null;

        return(
            <div>
            <Table striped className="navStyle container">
                <thead>
                    <tr>
                        <th>#</th>
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
                        {livros.map(({id, nome, autor, editora, idioma, paginas, ano}) => (
                             <tr key={id}>
                             <td>{id}</td>
                             <td>{nome}</td>
                             <td>{autor}</td>
                             <td>{editora}</td>
                             <td>{idioma}</td>
                             <td>{paginas}</td>
                             <td>{ano}</td>
                             <td>Atualizar<Button onClick={() => deletePost(id)} color="danger">Excluir</Button></td>
                         </tr>
                        ))}
                       
                      
                    
                </tbody>
            </Table>
            </div>
            
        )
    }


export default Livros;