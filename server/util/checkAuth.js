const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server');

const {SECRET_KEY} =  require('../config');

module.exports =(context)=>{

    const authHeader = context.req.headers.authorization;
    if(authHeader){
        const token = authHeader.split('Mukhtar')[1];
        if(token){
            try{
                const user = jwt.verify(token, SECRET_KEY);
                return user;
            }catch(err){
                throw new AuthenticationError('Authentication must be valid');
            }
        }
        throw new Error('Authentication token must be provided');
    }
  
       throw new Error('Authorization Header must be provided')
}