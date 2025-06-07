import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container, Typography, Paper, Box, CircularProgress } from '@mui/material'

function AlumnoDetail() {
  const { id } = useParams()
  const [alumno, setAlumno] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const alumnos = JSON.parse(localStorage.getItem('alumnos')) || []
    setAlumno(alumnos.find(a => String(a.id) === String(id)) || null)
    setCargando(false)
  }, [id])

  if (cargando) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <CircularProgress />
        <Typography variant='h6' sx={{ ml: 2 }}>Cargando alumno...</Typography>
      </Container>
    )
  }

  if (!alumno) {
    return (
      <Container sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="error">Alumno no encontrado</Typography>
        </Paper>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={4} sx={{ borderRadius: 3, p: 4, bgcolor: '#f5f7fa' }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Detalle del Alumno
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary">
          Información personal y académica
        </Typography>
        <Box sx={{ mt: 3 }}>
          {[
            { label: 'LU', value: alumno.lu },
            { label: 'Nombre', value: `${alumno.nombre} ${alumno.apellido}` },
            { label: 'Curso', value: alumno.curso },
            { label: 'Email', value: alumno.email },
            { label: 'Domicilio', value: alumno.domicilio },
            { label: 'Teléfono', value: alumno.teléfono }
          ].map(({ label, value }) => (
            <Typography key={label} variant="body1" sx={{ mb: 1 }}>
              <strong>{label}:</strong> {value}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Container>
  )
}

export default AlumnoDetail
