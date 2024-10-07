const express = require('express');
const cors = require('cors');  // Asegúrate de que esto está importado
const authRoutes = require('./routes/authRoutes');
const moduleRoutes = require('./routes/moduleRoutes');

const app = express();

app.use(cors());  // Habilita CORS para todas las solicitudes
app.use(express.json());  

app.use('/api/auth', authRoutes);  
app.use('/api/', moduleRoutes);
 

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
