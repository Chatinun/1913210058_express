const Shop = require("../models/shop");
const Menu = require("../models/menu");

exports.index = async (req, res, next) => {
  const shops = await Shop.find()
    .select("name photo location")
    .sort({ _id: -1 });

  const shopWithPhotoDomain = shops.map((shop, index) => {
    return {
      id: shop._id,
      name: shop.name,
      photo: "http://localhost:3000/images/" + shop.photo,
      location: shop.location,
    };
  });

  res.status(200).json({
    data: shopWithPhotoDomain,
  });
};

exports.menu = async (req, res, next) => {
  ///const menus = await Menu.find().select('+name -price');

  const menus = await Menu.find().where("price").gt(200).populate("shop");

  res.status(200).json({
    data: menus,
  });
};

exports.shopmenu = async (req, res, next) => {

    const { id } = req.params;

    const shop = await Shop.findById({_id:id}).populate('menu');

    res.status(200).json({
      data: shop,
    });
};
