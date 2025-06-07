import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Paper
} from '@mui/material'

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
      const encontrado = alumnos.find(a => a.id.toString() === id)
      if (encontrado) setAlumno(encontrado)
    }
  }, [id, alumnos])

  const handleChange = (e) => {
    setAlumno({ ...alumno, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let nuevoAlumno = alumno.id ? alumno : { ...alumno, id: Date.now() }
    if (onSave) onSave(nuevoAlumno)
    navigate('/alumnos')
  }

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {alumno.id ? 'Editar Alumno' : 'Nuevo Alumno'}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        {[
          { label: 'LU', name: 'lu', required: true },
          { label: 'Nombre', name: 'nombre', required: true },
          { label: 'Apellido', name: 'apellido', required: true },
          { label: 'Email', name: 'email', type: 'email', required: true },
          { label: 'Domicilio', name: 'domicilio' },
          { label: 'Teléfono', name: 'teléfono' }
        ].map(({ label, name, type, required }) => (
          <TextField
            key={name}
            label={label}
            name={name}
            value={alumno[name]}
            onChange={handleChange}
            type={type || 'text'}
            required={required}
            fullWidth
          />
        ))}
        <TextField
          select
          label="Curso"
          name="curso"
          value={alumno.curso}
          onChange={handleChange}
          required
          fullWidth
        >
          {['', 'Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto'].map((curso) => (
            <MenuItem key={curso} value={curso}>
              {curso || 'Seleccione un curso'}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
          Guardar
        </Button>
      </Box>
    </Paper>
  )
}

export default AlumnoForm
