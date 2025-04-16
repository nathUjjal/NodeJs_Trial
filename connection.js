import mongoose from "mongoose";

async function connectToDB(URL) {
    await mongoose.connect(URL)
    .then(() => console.log(" Database connected "))
    .catch((err) => console.log("error occured :",err));
}

export const connection = {
    connectToDB,
}