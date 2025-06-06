import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AlumnoList from './components/AlumnoList'
import AlumnoForm from './components/AlumnoForm'
import AlumnoDetail from './components/AlumnoDetail'
import Footer from '../src/components/Footer';
import './App.css';

function App() {
  const [alumnos, setAlumnos] = useState([
    { id: 1, lu: 'APU00999', nombre: 'María Eugenia', apellido: 'Diaz', curso: 'Tercero', email: 'mariadiaz@mail.com', domicilio: 'Av. Congreso 125', teléfono: '3884895999' }
  ])
  const [notification, setNotification] = useState('')

  const handleNotification = (message) => {
    setNotification(message)
    // Limpiar la notificación después de unos segundos
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
      </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App