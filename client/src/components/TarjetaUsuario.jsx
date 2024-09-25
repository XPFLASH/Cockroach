import React, { useState, useEffect } from 'react';
import '../styles/tarjetausuario.css'

const TarjetaUsuario = () => {
  
  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          
        }
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 id="h1Tarjeta">Usuarios</h1>
      <div id="tarjetasContainer">
      {users.map((user, index) => (
            <div key={index} id="divTarjetaUsuarios">
              <div><span>Nombre:</span> {user.name}</div>
              <div><span>Correo:</span> {user.email}</div>
              <div><span>Celular:</span> {user.phone}</div>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default TarjetaUsuario;


