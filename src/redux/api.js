import axios from "axios";

const YOUR_APP_ID = "27d2f325";
const YOUR_APP_KEY = "";


export const getRecipe = async (query) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    return await axios.get(url)
}
