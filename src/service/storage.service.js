const ImageKit = require("imagekit");
const mongoose = require("mongoose");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

function uploadFile(file) {
    return new Promise((resolve, reject) => {

        if (!file) {
            return reject(new Error("No file provided"));
        }

        const base64File = file.buffer.toString("base64");

        imagekit.upload({
            file: base64File,   
            fileName: new mongoose.Types.ObjectId().toString(),
            folder: "Audio"
        }, (error, result) => {
            if (error) {
                console.error("ImageKit Error:", error);
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = uploadFile;