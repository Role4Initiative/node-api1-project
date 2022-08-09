const server = require('./api/server');

const port = 9000;

// START YOUR SERVER HERE
// Code Start
server.listen(port, () => {
    console.log(`Server is listening on ${port}!`);
});