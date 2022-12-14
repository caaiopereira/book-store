import axios from "axios";
import React, {useState, useEffect} from "react"
import './css/Sobre.css'
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import swal from 'sweetalert';
import { useParams } from "react-router-dom";



const validationPost = yup.object().shape({
    nome: yup.string().required("Preencha o nome"),
    autor: yup.string().required("Preencha o autor"),
    editora: yup.string().required("Preencha a editora"),
    idioma: yup.string().required("Preencha o idioma"),
    paginas: yup.string().required("Preencha a quantidade de páginas"),
    ano: yup.string().required("Preencha o ano").min(4, "Informe o ano correto")
})




function EditLivros() {

    const { id } = useParams();


    const { reset, register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(validationPost)
    })


    const addPost = data => axios.put(`https://desenvolvendo-servidor-json.vercel.app/livros/${id}`, data)
    .then(() => {
    }).catch(() => {
        swal({
            title: "Livro Editado!",
            text: "Acesse a aba Livros para visualiza-lo",
            icon: "success"
          });
    })
    
    useEffect(() => {
        axios.get(`https://desenvolvendo-servidor-json.vercel.app/livros/${id}`)
        .then((response) => {
            reset(response.data)
        })
        
    }, [])



    return (
      <div>
        <main>

            <div className="card-post margin-text">

            <h1>Editar Livro</h1>
                <div className="line-post"> </div>

                    <div className="card-body-post">

                        <form onSubmit={handleSubmit(addPost)}>  
                            <div className="fields">
                                <label>Nome</label>
                                <input type="text" name="nome" {...register("nome")}/>
                                <p className="error-message">{errors.nome?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Autor</label>
                                <input type="text" name="autor" {...register("autor")}/>
                                <p className="error-message">{errors.autor?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Editora</label>
                                <input type="text" name="editora" {...register("editora")}/>
                                <p className="error-message">{errors.editora?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Idioma</label>
                                <input type="text" name="idioma" {...register("idioma")}/>
                                <p className="error-message">{errors.idioma?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Páginas</label>
                                <input type="number" name="paginas" {...register("paginas")}/>
                                <p className="error-message">{errors.paginas?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Ano</label>
                                <input type="number" name="ano" {...register("ano")}/>
                                <p className="error-message">{errors.ano?.message}</p>
                            </div>

                            <div className="btn-post">
                                <button type="submit">Enviar</button>
                            </div>

                        </form>

                    </div>

                </div>
        </main>
      </div>
    )
  };
  
  export default EditLivros;