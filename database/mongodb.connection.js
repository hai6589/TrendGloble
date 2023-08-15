const { default: mongoose} = require('mongoose');

const MongoConnection = {
    connect: async () => {
        await mongoose.connect(process.env.MONGO_URI)
        
             .then( () => {
                console.log('Database connection !');
             }).catch((err) => {
                console.log(err);
             })
    }
}

module.exports = MongoConnection