import { AppBar, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/alumnos">Lista de Alumnos</Button>
        <Button color="inherit" component={Link} to="/alumnos/nuevo">Nuevo Alumno</Button>
        <Button color="inherit" component={Link} to="/acerca">Acerca de</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar