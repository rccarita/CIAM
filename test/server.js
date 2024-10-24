const express = require('express');
const authRoutes = require('../src/routes/auth.routes');
const templateRoutes = require('../src/routes/template.routes');

const app = express();

app.use('/auth', authRoutes);
app.use('/templates', templateRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));