import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'50b90a4844ab489e9e8445bc64f7170e'
    }
})