const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://thesujalogy:thesujalogy@atlascluster.ezemj2a.mongodb.net/BURARIJILA?retryWrites=true&w=majority");

module.exports = {
    connection
}