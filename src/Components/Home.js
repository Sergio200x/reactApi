import {Link} from 'react-router-dom'
import { useState, useEffect, useRef, useReducer } from "react";
import '../css.css'

function Home (){

    const [user, setuser]= useState([])    
    useEffect (() => {        
        fetch("http://localhost:3030/api/users")
        .then(response => response.json())
        .then( data =>{ setuser(data.data)})
        .catch(error =>console.error(error))
        }, [])
    
       
        const ultimo = (user[(user.length)-1].UserID)

         console.log(ultimo)

    return (
            <div className='principal_container'> 
                <h1 className='h1_dash'>Dashboard All Clean</h1> 
                    
                    <h2 className='h3_dash'>Bienvenidos/as.</h2> 
                    <h3>
                    <Link to="/totalUsuarios">Consulta de usuarios</Link>                         
                    </h3>
                    <h3>
                    <Link to='/products'>Consulta de Productos</Link> 
                    </h3>
                    <h3>
                    <Link to='/Categorias'>Consulta de Categorias</Link> 
                    </h3>
                    <div>
                        <h3>Ultimo Usuario creado</h3> 
                         <div className='contenedor'>
                           <li>{ultimo.Name}</li>
                           <li>{ultimo.LastName}</li>
                           <li>{ultimo.UserID}</li>
                           <li>{}</li>
                            </div> 

                    </div>
                    
                    
             </div>
        )    
}

export default Home