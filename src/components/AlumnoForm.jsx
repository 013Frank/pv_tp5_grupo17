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
    // Asigna id si es nuevo
    const alumnoParaGuardar = alumno.id ? alumno : { ...alumno, id: Date.now() }
    if (onSave) {
      onSave(alumnoParaGuardar)
    }
    navigate('/alumnos')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField label="LU" name="lu" value={alumno.lu} onChange={handleChange} fullWidth margin="normal"/>
        <TextField label="Nombre" name="nombre" value={alumno.nombre} onChange={handleChange} fullWidth margin="normal"/>
        <TextField label="Apellido" name="apellido" value={alumno.apellido} onChange={handleChange} fullWidth margin="normal"/>
        <TextField label="Curso" name="curso" value={alumno.curso} onChange={handleChange} fullWidth margin="normal"/>
        <TextField label="Email" name="email" value={alumno.email} onChange={handleChange} fullWidth margin="normal"/>
        <TextField label="Domicilio" name="domicilio" value={alumno.domicilio} onChange={handleChange} fullWidth margin="normal"/>
        <TextField label="Teléfono" name="teléfono" value={alumno.teléfono} onChange={handleChange} fullWidth margin="normal"/>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Guardar
        </Button>
      </form>
    </Container>
  )
}

export default AlumnoForm