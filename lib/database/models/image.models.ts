import { transformationTypes } from "@/constants";
import {Document, model, models, Schema} from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationTypes: string;
    publicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: Record<string, unknown>;
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}

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