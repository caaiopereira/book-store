import React, {useState} from "react"
import axios from "axios";
import {Table, Button} from "reactstrap";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import './css/Livros.css'


    
    const baseURL = "https://desenvolvendo-servidor-json.vercel.app/livros";

    function Livros() {
        const [livros, setPost] = useState([]);

        React.useEffect(() => {
            axios.get(`${baseURL}`).then((response) => {
              setPost(response.data);
            });
          }, []);

    
          function deletePost(id) {
                axios.delete(`${baseURL}/${id}`).then(() => {
                    setPost(null);
                  })
                  .catch(() => {
                    swal({
                        title: "Apagado",
                        text: "Livro foi excluído com sucesso",
                        icon: "error",
                        button: <Link to="/Livros" ></Link>
                      });
                })
          }



          if (!livros) return null;

        return(
            <>
            <div className="btnAdd d-grid">
                <Button href="/AddLivros" className="container" size="lg" color="success">Adicionar</Button>
            </div>

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
                        <th>Ano</th>
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
                             <td><Link to={{ pathname: `/EditLivros/${id}`}} href="/EditLivros"><Button color="warning">Editar</Button></Link></td>
                             <td><Button onClick={() => deletePost(id)} size="" color="danger">Excluir</Button></td>
                         </tr>
                        ))}
                                 
                </tbody>
            </Table>
            </div>
        </>
        )
    }


export default Livros;