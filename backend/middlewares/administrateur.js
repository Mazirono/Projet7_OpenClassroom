module.exports = (req, res, next) => {
  
    try {
      
      const administrateur = req.headers.authorization;
     
      
      if (administrateur != true) {
        next();
      } 
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!')
      });
    }
  };