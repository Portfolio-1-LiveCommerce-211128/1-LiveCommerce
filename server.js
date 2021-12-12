const app = require("./app");
const port = 3000;
const host = "127.0.0.1"
//const host = "ec2-3-145-95-104.us-east-2.compute.amazonaws.com"

app.listen(port, ()=>{
    console.log(`Application is running http://${host}:${port}`);
})