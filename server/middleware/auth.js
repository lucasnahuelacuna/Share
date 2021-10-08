const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const isCustomAuth = token.length < 500 //In other case is Google Auth

        let decodeData;

        if(token && isCustomAuth) {
            decodeData = jwt.verify(token, process.env.SECRET)
            req.userId = decodeData?.id
        } else {
            decodeData = jwt.decode(token)
            req.userId = decodeData?.sub
        }

        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = auth