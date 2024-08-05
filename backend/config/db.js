import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sionchowdhary:280502@cluster0.iv7dlcn.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}