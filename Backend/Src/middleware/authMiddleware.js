const jwt = require('jsonwebtoken');

module.exports.Authmiddleware = async (req, res, next) => {
    const { accessToken } = req.cookies;

    if (!accessToken) {
        return res.status(401).json({ error: "Access token is missing. Please log in." });
    } else {
        try {
            const decodedToken = await jwt.verify(accessToken, process.env.SECRET);
            req.role = decodedToken.role;
            req.id = decodedToken.id;
            next();
        } catch (error) {
            return res.status(401).json({ error: "Invalid or expired access token. Please log in again." });
        }
    }
};
