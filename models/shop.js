const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    name: { type: String, require: true, trim: true },
    photo: { type: String, default: "nopic.png" },
    location: {
      lat: Number,
      lgn: Number,
    },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now }
  },
  { 
    collection: "shops", 
    timestamps: true,
    toJSON: {virtuals: true},
  }
);

shopSchema.virtual('menu',
{
  ref: 'Menu',
  localField: '_id',
  foreignField: 'shop',
});

const shop = mongoose.model("Shop", shopSchema);

module.exports = shop;
