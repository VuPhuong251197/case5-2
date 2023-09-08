import jwt from 'jsonwebtoken';

export const SECRET = '12456'
export const auth = (req: any, res: any, next: any) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = req.headers.authorization.split(' ')[1];
        if (accessToken) {
            jwt.verify(accessToken, SECRET, (err: any, payload: any) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'You are anonymous'
                    })
                } else {
                    req.decode = payload;
                    next();
                }
            })
        } else {
            res.status(401).json({
                message: 'You are anonymous'
            })
        }
    } else {
        res.status(401).json({
            message: 'You are anonymous'
        })
    }
}

export default auth;