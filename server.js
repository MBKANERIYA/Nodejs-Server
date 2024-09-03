let express = require("express")
let http = require("http")

let app = express()

PORT = 3001

app.get("/home", (req, res) => {
    res.status(200).json({
        message: "GET HOME PAGE SUCCESSFULLY"
    })
})
app.get("/about", (req, res) => {
    res.status(200).json({
        message:"GET ABOUT PAGE SUCCESSFULLY"
    })
})
app.get("/blog", (req, res) => {
    res.status(200).json({
        message:"GET BLOG PAGE SUCCESSFULLY"
    })
})
app.get("/contact", (req, res) => {
    res.status(200).json({
        message:"GET CONTACT PAGE SUCCESSFULLY"
    })
})

http.createServer(app).listen(PORT, () => {
    console.log(`SERVER STARTED ON ${PORT}`);
})
