import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AlumnoList from './components/AlumnoList'
import AlumnoForm from './components/AlumnoForm'
import AlumnoDetail from './components/AlumnoDetail'
import Footer from '../src/components/Footer';
import './App.css';
import { useEffect } from 'react'
import Acerca from './components/Acerca'

function App() {
  const [alumnos, setAlumnos] = useState(() => {
    const stored = localStorage.getItem('alumnos');
    return stored
      ? JSON.parse(stored)
      : [
      { id: 1, lu: 'APU00999', nombre: 'María Eugenia', apellido: 'Diaz', curso: 'Tercero', email: 'mariadiaz@mail.com', domicilio: 'Av. Congreso 125', teléfono: '3884895999' },
      { id: 2, lu: 'APU00999', nombre: 'Franco German', apellido: 'Cruz', curso: 'Segundo', email: 'francocruz@email.com', domicilio: 'Av. Congreso 125', teléfono: '3884895999' },
      { id: 4, lu: 'APU00999', nombre: 'Armella Julian', apellido: 'Enrique', curso: 'Segundo', email: 'julianenrique@email.com', domicilio: 'Av. Congreso 125', teléfono: '3884895999' },
      { id: 5, lu: 'APU00999', nombre: 'Sofia Guadalupe', apellido: 'Cabana', curso: 'Segundo', email: 'sofiacabana@email.com', domicilio: 'Av. Congreso 125', teléfono: '3884895999' },
      { id: 6, lu: 'APU00999', nombre: 'Marcos Alejandro Nicolás', apellido: 'Chavarria', curso: 'Segundo', email: 'marcoschavarria@email.com', domicilio: 'Av. Congreso 125', teléfono: '3884895999' }
      ];
  });
  const [notification, setNotification] = useState('')

  const handleNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification('')
    }, 4000)
  }

  const handleAddAlumno = (alumno) => {
    setAlumnos(prev => [...prev, alumno])
    handleNotification('Alumno guardado exitosamente!')
  }

  const handleEliminarAlumno = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este alumno?")) {
      setAlumnos(prev => prev.filter(a => a.id !== id))
      handleNotification('Alumno eliminado exitosamente!')
    }
  }

  const handleUpdateAlumno = (alumnoActualizado) => {
    setAlumnos(prev => prev.map(al => al.id === alumnoActualizado.id ? alumnoActualizado : al))
    handleNotification('Alumno actualizado exitosamente!')
  }
  useEffect(() => {
  localStorage.setItem('alumnos', JSON.stringify(alumnos))
  }, [alumnos])

  return (
    <>
    <div className="main-layout">
      <NavBar />
      {notification && (
        <div style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          background: '#4caf50',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '4px'
        }}>
          {notification}
        </div>
      )}
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
          element={
            <AlumnoForm
              onSave={handleUpdateAlumno}
              alumnos={alumnos}
            />
          }
        />
        <Route path="/Acerca" element={<Acerca />} />
      </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App