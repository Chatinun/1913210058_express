exports.index = (req, res, next) => {
  //res.send('Hello');
  res.status(200).json({
    fullname: "Chatinun Nuntapasuk",
  });
};

exports.bio = (req, res, next) => {
  res.status(200).json({
    fullname: "Chatinun Nuntapasuk",
    nickname: "Max",
    hobby: "Sleep",
    gitusername: "Chatinun",
  });
};
