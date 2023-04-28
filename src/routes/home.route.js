const home = (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome to Javier's API!\n");
}

module.exports = home;