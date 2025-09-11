import jwt from 'jsonwebtoken';


export default function auth(req, res, next) {
    const authHeader = req.header['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) return res.status(401).json({message: 'Access denied. No token provided.'});
    try {
        jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
            if(err) return res.status(403).json({message: 'Invalid token'});
            req.user = payload;
            next();
        })
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}