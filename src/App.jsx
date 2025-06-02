import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AlumnoList from './components/AlumnoList'
import AlumnoForm from './components/AlumnoForm'
import AlumnoDetail from './components/AlumnoDetail'

function App() {
  const [alumnos, setAlumnos] = useState([
    { id: 1, lu: 'APU00999', nombre: 'María Eugenia', apellido: 'Diaz', curso: 'Tercero', email: 'mariadiaz@mail.com' }
  ])

  const handleAddAlumno = (alumno) => {
    // Agrega nuevo alumno
    setAlumnos(prev => [...prev, alumno])
  }

  const handleEliminarAlumno = (id) => {
    // Elimina alumno por id
    setAlumnos(prev => prev.filter(a => a.id !== id))
  }

  const handleUpdateAlumno = (alumnoActualizado) => {
    // Actualiza alumno existente
    setAlumnos(prev => prev.map(al => al.id === alumnoActualizado.id ? alumnoActualizado : al))
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/alumnos" 
          element={
            <AlumnoList 
              alumnos={alumnos} 
              onEliminar={handleEliminarAlumno} 
            />
          } 
        />
        <Route 
          path="/alumnos/nuevo" 
          element={<AlumnoForm onSave={handleAddAlumno} />} 
        />
        <Route 
          path="/alumnos/:id" 
          element={<AlumnoDetail />} 
        />
        <Route 
          path="/alumnos/:id/editar" 
          element={<AlumnoForm 
            onSave={handleUpdateAlumno} 
            alumnos={alumnos} 
          />} 
        />
      </Routes>
    </>
  )
}

export default App
