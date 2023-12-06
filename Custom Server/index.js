const http = require('http');

const port = 8000;

const fs = require('fs');

const hardRequest = (req, res) => {
    let url = req.url;
    let filename = '';
    switch (url) {
        case '/':
            filename = './index.html';
            break;
        case '/home':
            filename = './home.html';
            break;
        case '/about':
            filename = './about.html';
            break;
        case '/product':
            filename = './product.html';
            break;
        case '/contact':
            filename = './contact.html';
            break;
        default:
            filename = './404.html'
    }
    fs.readFile(filename, (error, record) => {
        if (error) {
            console.log("Not Found");
        }
        res.end(record)
    })
}

const server = http.createServer(hardRequest);

server.listen(port, (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`Server is start in Port :- ${port}`);
})