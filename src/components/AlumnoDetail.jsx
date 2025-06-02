import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container, Typography } from '@mui/material'

function AlumnoDetail() {
  const { id } = useParams()
  const [alumno, setAlumno] = useState(null)

  useEffect(() => {
    // Buscar alumno por ID
    // Aquí de nuevo, en un estado global o base de datos local
  }, [id])

  if (!alumno) return null

  return (
    <Container>
      <Typography variant="h5">Detalle del Alumno</Typography>
      <p>LU: {alumno.lu}</p>
      <p>Nombre: {alumno.nombre} {alumno.apellido}</p>
      <p>Curso: {alumno.curso}</p>
      <p>Email: {alumno.email}</p>
      {/* otros datos */}
    </Container>
  )
}

export default AlumnoDetail