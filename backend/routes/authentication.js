const User = require('./../models/user');

const isMissingParams = req => {
  return !req.body.username || !req.body.email || !req.body.password
}

const getNewUser = userObj => {
  return new User({
    username: userObj.username,
    email: userObj.email,
    password: userObj.password
  });
}

export const signup = (req, res) => {
  if(isMissingParams(req)){
    console.log('Missing params');
    res.status(400).json({message: 'Missing required params'});
  } else {
  const newUser = getNewUser(req.body);
  newUser.save()
      .then(result => {
        res.status(200).send({user: result});
      })
      .catch(err => {
        res.status(401).json({message:'username or email already exists'});
      });
  }
}
