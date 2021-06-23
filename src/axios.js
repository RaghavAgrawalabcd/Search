import axios from "axios";

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain",
    },
};
const instance = axios.create(
    { baseURL: "https://www.reddit.com/r/", https: config, });

export default instance;