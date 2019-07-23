var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//SETUP MONGOOSE
//cloud platform -> MLAB URI
// mongoose.connect('mongodb://<dbusername>:<dbpassword>@ds044577.mlab.com:44577/node-crud-restapi', {
//     useMongoClient: true
// });

//SETUP MONGOOSE
//Local platform -> MONGODB
mongoose.connect('mongodb://localhost:27017/node-crud', {
    useMongoClient: true
});
