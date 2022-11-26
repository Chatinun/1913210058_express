exports.index = (req, res, next) => {
  res.status(200).json({
    data: [
      {
        id: 1,
        name: "Bitegg Inc.",
        address: {
            province: "Chiang Mai",
            postcode : 50100
        }
      },
      {
        id: 2,
        name: "Line",
        address: {
            province: "Bangkok",
            postcode : 10330
        }
      },
      {
        id: 3,
        name: "Shopee",
        address: {
            province: "Bangkok",
            postcode : 10310
        }
      }
    ],
  });
};
