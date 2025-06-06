import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container, Typography } from '@mui/material'

function AlumnoDetail() {
  const { id } = useParams()
  const [alumno, setAlumno] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const alumnosLocal = JSON.parse(localStorage.getItem('alumnos')) || []
    const encontrado = alumnosLocal.find(a => a.id.toString() === id)
    setAlumno(encontrado || null)
    setCargando(false)
  }, [id])

  if (cargando){
    return(
      <Container>
        <Typography variant='h6'>Cargando alumnos...</Typography>
      </Container>
    )
  }
  
  if (!alumno) return (
    <Container>
      <Typography variant="h6">Alumno no encontrado</Typography>
    </Container>
  )

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Detalle del Alumno</Typography>
      <p><strong>LU:</strong> {alumno.id}</p>
      <p><strong>Nombre:</strong> {alumno.nombre} {alumno.apellido}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.teléfono}</p>
    </Container>
  )
}

export default AlumnoDetail