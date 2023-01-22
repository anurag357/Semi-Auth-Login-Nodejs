const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    console.log(req.cookies)
    const {token} = req.cookies

    // Authorization: "Bearer longtokenvalue"
    // const token = req.header("Authorization").replace("Bearer ", "")

    //what is token not there
    if(!token){
        return res.status(403).send("Token is missing !")
    }

    //verify token 

    try {
        const decode = jwt.verify(token, 'shhhhh')
        console.log(decode)
        req.user = decode
    } catch (error) {
        return res.status(403).send('token is invalid !')
    }
    return next()
}

module.exports = auth