const jwt = require('jsonwebtoken');

module.exports.AuthMiddleware = async (req, res, next) => {
    // Check for the presence of the access token in cookies
    const { accessToken } = req.cookies;

    if (!accessToken) {
        return res.status(401).json({ error: "Access token is missing. Please log in." });
    } else {
        try {
            // Verify the access token using the SECRET defined in your environment variables
            const decodedToken = await jwt.verify(accessToken, process.env.SECRET);

            // Attach user information from the token to the request for later use
            req.role = decodedToken.role;
            req.id = decodedToken.id;

            // Continue to the next middleware or route
            next();
        } catch (error) {
            // Log the error for debugging (you can use a logger)
            console.error("JWT verification error:", error);

            // Send a generic error response to the client
            return res.status(401).json({ error: "Invalid or expired access token. Please log in again." });
        }
    }
};
