const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define routes and middleware

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
