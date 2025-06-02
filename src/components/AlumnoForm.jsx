import { useState, useEffect } from 'react'
import { Container, TextField, Button } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'

function AlumnoForm({ onSave, alumnos }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const [alumno, setAlumno] = useState({
    id: null,
    lu: '',
    nombre: '',
    apellido: '',
    curso: '',
    email: '',
    domicilio: '',
    teléfono: ''
  })

  // Cargar datos si estamos editando
  useEffect(() => {
    if (id && alumnos.length > 0) {
      const alumnoExistente = alumnos.find(al => al.id.toString() === id)
      if (alumnoExistente) {
        setAlumno(alumnoExistente)
      }
    }
  }, [id, alumnos])

  const handleChange = (e) => {
    setAlumno({ ...alumno, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Si es nuevo, asignar un id
    if (!alumno.id) {
      alumno.id = Date.now() // o usar uuid
    }
    // Guardar en la lista global
    if (onSave) {
      onSave(alumno)
    }
    navigate('/alumnos')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField label="LU" name="lu" value={alumno.lu} onChange={handleChange} fullWidth />
        <TextField label="Nombre" name="nombre" value={alumno.nombre} onChange={handleChange} fullWidth />
        <TextField label="Apellido" name="apellido" value={alumno.apellido} onChange={handleChange} fullWidth />
        <TextField label="Curso" name="curso" value={alumno.curso} onChange={handleChange} fullWidth />
        <TextField label="Email" name="email" value={alumno.email} onChange={handleChange} fullWidth />
        {/* Otros campos */}
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>Guardar</Button>
      </form>
    </Container>
  )
}

export default AlumnoForm