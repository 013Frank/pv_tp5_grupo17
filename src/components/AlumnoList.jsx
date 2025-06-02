import { Container, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function AlumnoList({ alumnos, onEliminar }) {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>LU</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Curso</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alumnos.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">No hay alumnos registrados.</TableCell>
            </TableRow>
          ) : (
            alumnos.map(alumno => (
              <TableRow key={alumno.id}>
                <TableCell>{alumno.lu}</TableCell>
                <TableCell>{alumno.nombre}</TableCell>
                <TableCell>{alumno.apellido}</TableCell>
                <TableCell>{alumno.curso}</TableCell>
                <TableCell>
                  <Button component={Link} to={`/alumnos/${alumno.id}`}>Ver</Button>
                  <Button component={Link} to={`/alumnos/${alumno.id}/editar`}>Editar</Button>
                  <Button color="error" onClick={() => onEliminar(alumno.id)}>Eliminar</Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Container>
  )
}

export default AlumnoList