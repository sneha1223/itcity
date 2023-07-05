import axios from "axios";
import jsCookie from "js-cookie";



export const API_CLIENT = axios.create({
    baseURL:  "https://itcity.tectuz.com/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${jsCookie.get("token")}`
    },
  });


export const imageUrl = "https://itcity.tectuz.com/uploads/home-slider/";
export const thumbImgUrl ="https://itcity.tectuz.com/uploads/product/thumb_images/";
export const homeimageUrl="https://itcity.tectuz.com/uploads/home-slider/";
