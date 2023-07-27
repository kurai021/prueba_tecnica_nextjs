"use client"

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from "@mui/material/FormControl"
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Home() {
  const [nombreCliente, setNombreCliente] = useState('');
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [estatusProyecto, setEstatusProyecto] = useState('');

  const handleChange = (event) => {
    setEstatusProyecto(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aquí realizarás el POST a la API para agregar el nuevo proyecto
    const response = await fetch('/api/proyecto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombreCliente: nombreCliente,
        nombreProyecto: nombreProyecto,
        ubicacion: ubicacion,
        estatusProyecto: estatusProyecto,
      }),
    });

    if (response.ok) {
      // Proyecto creado exitosamente, puedes mostrar un mensaje o redireccionar a otra página
      console.log('Proyecto creado exitosamente!');
    } else {
      console.error('Error al crear el proyecto');
    }
  };

  return (
    <main>
      <Container>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>

          <FormControl fullWidth>
            <TextField
              label="Nombre del cliente"
              variant="outlined"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Nombre del proyecto"
              variant="outlined"
              value={nombreProyecto}
              onChange={(e) => setNombreProyecto(e.target.value)}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Ubicación"
              variant="outlined"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
            />
          </FormControl>


          <FormControl fullWidth>
            <InputLabel id="estatus-proyecto-label">Estatus del Proyecto</InputLabel>
            <Select
              labelId="estatus-proyecto-label"
              id="estatus-proyecto"
              variant="outlined"
              value={estatusProyecto}
              label="Estatus del Proyecto"
              onChange={handleChange}
            >
              <MenuItem value="EN CURSO">EN CURSO</MenuItem>
              <MenuItem value="STAND BY">STAND BY</MenuItem>
              <MenuItem value="TERMINADO">TERMINADO</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Crear Proyecto
          </Button>
        </Box>
      </Container>
    </main>
  );
}
