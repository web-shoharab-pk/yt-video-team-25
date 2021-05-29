import axios from 'axios';


const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyDeM8jjQln_ZGyaSay3h6IjGAWf7QAYolE",
    },
}) 
export default request;