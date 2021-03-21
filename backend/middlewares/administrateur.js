module.exports = (req, res, next) => {
  
    try {
     if (req.headers.administrateur === "true") {
        next();
      } 
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!')
      });
    }
  };