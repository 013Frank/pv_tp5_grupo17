import React from 'react';


const creadores = [
  {
    nombre: 'Franco German Cruz',
    usuario: '013Frank',
  },
  {
    nombre: 'Siomara Jael Guanca Venicio',
    usuario: 'siomaraven',
  },
  {
    nombre: 'Armella Julian Enrique',
    usuario: 'Jul772',
  },
    {
    nombre: 'Sofia Guadalupe Cabana',
    usuario: 'sofiii3',
  },
    {
    nombre: 'Marcos Alejandro Nicolás Chavarria',
    usuario: 'NiVerenC',
  },
];

function Acerca() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Creadores de la Página</h2>
      <div className="row">
        {creadores.map((persona, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{persona.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{persona.usuario}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Acerca;