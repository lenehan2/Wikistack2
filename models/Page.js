// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var pageSchema = new Schema({
//     title:  { type: String, required: true },
//     urlTitle: { type: String, required: true },
//     content:   { type: String, required: true },
//     status: { type: String, enum: ['open', 'closed'] },
//     date: { type: Date, default: Date.now },
//     author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
//   });

// var Page = mongoose.model("Page", pageSchema);

// pageSchema.virtual("route").get(function() {
//   return "/wiki/" + this.urlTitle;
// });

// module.exports = Page;