import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container, Typography } from '@mui/material'

function AlumnoDetail() {
  const { id } = useParams()
  const [alumno, setAlumno] = useState(null)

  useEffect(() => {
    // Por ahora, se simula la búsqueda, hay que ver de agregarla correctamente
    const alumnosLocal = JSON.parse(localStorage.getItem('alumnos')) || []
    const alumnoEncontrado = alumnosLocal.find(a => a.id.toString() === id)
    setAlumno(alumnoEncontrado)
  }, [id])

  if (!alumno) return (
    <Container>
      <Typography variant="h6">Cargando datos del alumno...</Typography>
    </Container>
  )

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Detalle del Alumno</Typography>
      <p><strong>LU:</strong> {alumno.lu}</p>
      <p><strong>Nombre:</strong> {alumno.nombre} {alumno.apellido}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.teléfono}</p>
    </Container>
  )
}

export default AlumnoDetail