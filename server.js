const http = require("http");
const app = require("./index");

const port = 3001;


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});