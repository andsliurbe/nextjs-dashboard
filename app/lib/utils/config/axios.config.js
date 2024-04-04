import axios from "axios";

export default axios.create(
            {
                    baseURL:"https://developers.intercomsoluciones.com:1111/",
                    responseType:"json",
                    timeout:6000
            }

)