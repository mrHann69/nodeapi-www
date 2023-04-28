const notFound = (req, res)=>{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Not Found\n');
}
module.exports= notFound;