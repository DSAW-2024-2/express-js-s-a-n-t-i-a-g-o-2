const express = require('express');
const app = express();

// Información de los estudiantes
const students = {
  1: {
    name: 'Santiago',
    lastName: 'Gutiérrez de Piñeres Barbosa',
    email: 'santiagoguba@unisabana.edu.co',
    id: '305850'
  },
  2: {
    name: 'Santiago santiago',
    lastName: 'Urrego Rodriguez',
    email: 'santiagourro@unisabana.edu.co',
    id: '285468'
  }
};


// Endpoint principal que indica que el endpoint está funcional
app.get('/', (req, res) => {
    res.send('Endpoint funcional');
  });
  
  // Endpoint para obtener información de los estudiantes
  app.get('/user-info/:id', (req, res) => {
    const id = req.params.id;
    const student = students[id];
  
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Estudiante no encontrado' });
    }
  });
  
  // Configura el servidor en el puerto 3000
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT);
  });