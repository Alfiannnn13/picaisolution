import { transformationTypes } from "@/constants";
import {model, models, Schema} from "mongoose";

const ImageSchema = new Schema ({
    title: {type: String, required: true}, 
    transformationTypes: {type: String, required: true},
    publicId: {type: String, required: true},
    secureUrl: {type:URL, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type:Object},
    transformationUrl: {type: URL},
    aspectRatio: {type: String},
    color:{type:String},
    prompt : {type:String},
    author: {type:Schema.Types.ObjectId, ref:'User'},
    createdAt: {type:Date, default:Date.now},
    updateAt: {type:Date, default:Date.now},
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;