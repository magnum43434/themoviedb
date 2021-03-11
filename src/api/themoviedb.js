import axios from 'axios'

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        "api_key": "f096b92105251111f68717954f508196"
    }
})