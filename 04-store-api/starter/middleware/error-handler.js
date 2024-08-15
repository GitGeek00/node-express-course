const errorHandlerMiddleware = async (err, req, res, next) => {
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}


// Don't pass err to the response
//It usually isn't a good idea to return exceptions directly in your response to the user for security 
// reasons. Doing that could expose sensitive data or implementation details that the user shouldn't 
// know about.

module.exports = errorHandlerMiddleware
