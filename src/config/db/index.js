const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/bootshop_product', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
// mongoose.connect('mongodb://localhost:27017/bootshop_product',{useNewUrlParser: true, useUnifiedTopology:true})
// const mongoDB= mongoose.connection;
// module.exports=mongoDB
