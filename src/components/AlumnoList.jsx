import { Grid, Box, Card, CardActions, CardContent, Typography, Container, Button, Tooltip, Fade } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react';

function AlumnoList({ alumnos, onEliminar }) {
  const [confirmId, setConfirmId] = React.useState(null);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Lista de Alumnos
      </Typography>
      {alumnos.length === 0 ? (
        <Typography align="center" color="text.secondary">
          No hay alumnos registrados.
        </Typography>
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent="center"
        >
          {alumnos.map(alumno => (
            <Grid item xs={12} sm={6} md={4} key={alumno.id} display="flex" justifyContent="center">
              <Fade in timeout={500}>
                <Card variant="outlined" sx={{ width: '100%', maxWidth: 400, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                      Datos del Alumno
                    </Typography>
                    <Typography variant="h6" component="div">
                      {alumno.nombre} {alumno.apellido}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                      LU: {alumno.lu}
                    </Typography>
                    <Typography variant="body2">
                      Curso: {alumno.curso}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Box display="flex" gap={1}>
                      <Tooltip title="Ver detalles" arrow>
                        <Button component={Link} color="success" variant="outlined" size="small" to={`/alumnos/${alumno.id}`}>Ver</Button>
                      </Tooltip>
                      <Tooltip title="Editar alumno" arrow>
                        <Button component={Link} color="primary" variant="outlined" size="small" to={`/alumnos/${alumno.id}/editar`}>Editar</Button>
                      </Tooltip>
                      {confirmId === alumno.id ? (
                        <>
                          <Button color="error" variant="contained" size="small" onClick={() => { onEliminar(alumno.id); setConfirmId(null); }}>Confirmar</Button>
                          <Button variant="outlined" size="small" onClick={() => setConfirmId(null)}>Cancelar</Button>
                        </>
                      ) : (
                        <Tooltip title="Eliminar alumno" arrow>
                          <Button color="error" variant="outlined" size="small" onClick={() => setConfirmId(alumno.id)}>Eliminar</Button>
                        </Tooltip>
                      )}
                    </Box>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default AlumnoList