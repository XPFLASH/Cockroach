import React, { useState } from 'react'
import '../styles/registro.css';
import { FaEnvelope, FaGlobeAmericas, FaLock, FaPhoneAlt, FaSignature, FaSortNumericUpAlt} from "react-icons/fa";


const registro = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')

  const addUser = async (e) =>{
    e.preventDefault()

    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        email,
        password,
        phone,
        country,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      console.log('Usuario registrado con éxito:', data);
      resetCampos();
    } else {
      console.error('Error al registrar usuario:', data.msg);
    }
  }

  const resetCampos = () =>{
    setName("");
    setAge("");
    setEmail("");
    setPassword("")
    setPhone("");
    setCountry("");

  }
 
  return (
    <div id='registro'>
      <section id='sectionForm'>
      <h1 id='h1Registro'>Formulario de Registro (+CockroachDB)</h1>
      </section>
        <form onSubmit={addUser}>
          <div>
            <label htmlFor="name" id='labelForm'> <FaSignature/> Nombre:</label>
            <input 
            type="text" 
            name="" 
            id="name" 
            placeholder='Escriba su nombre...' 
            value={name} 
            onChange={(e)=> setName(e.target.value)} 
            required />
          </div>

          <div>
            <label htmlFor="edad" id='labelForm'><FaSortNumericUpAlt/> Edad:</label>
            <input 
            type="number" 
            name="" 
            id="edad" 
            placeholder='Escriba su edad...' 
            value={age}
            onChange={(e)=> setAge(e.target.value)}  />
          </div>

          <div>
            <label htmlFor="email" id='labelForm'> <FaEnvelope/> Correo:</label>
            <input 
            type="email" 
            name="" 
            id="email" 
            placeholder='Escriba su correo...' 
            required 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}  />
          </div>

          <div>
            <label htmlFor="password" id='labelForm'> <FaLock/> Contraseña:</label>
            <input 
            type="password" 
            name="" 
            id="password" 
            placeholder='Escriba su contraseña...' 
            required 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}  />
          </div>

          <div>
            <label htmlFor="phone" id='labelForm'><FaPhoneAlt/> Celular:</label>
            <input 
            type="text" 
            name="" 
            id="phone" 
            placeholder='Escriba su celular...' 
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}  />
          </div>

          <div>
            <label htmlFor="country" id='labelForm'><FaGlobeAmericas/> Pais:</label>
            <input 
            type="text" 
            name="" 
            id="country" 
            placeholder='Escriba su país...' 
            value={country}
            onChange={(e)=> setCountry(e.target.value)}  />
          </div>  

          <div id='divBoton'>
            <button type='submit'>Enviar</button>
          </div>
        </form>
      
    </div>
  )
}

export default registro