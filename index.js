const app = require("./app")
const port = require('./config/portConfig')
app.listen(port.PORT,()=>{
    console.log(`Server running of port ${port.PORT}`);
})