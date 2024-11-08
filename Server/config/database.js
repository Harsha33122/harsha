const mongoose = require("mongoose");

const connectDB = () => {
     
    mongoose.connect(
    "mongodb+srv://harshabhuvi:5eZVfEQ7S8IFvAP8@cluster0.wde8m.mongodb.net/Harshudb?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

};
module.exports = connectDB;
