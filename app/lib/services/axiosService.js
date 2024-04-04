import axiosConfig from "../utils/config/axios.config";

export function getTestInfo(){
    // const { campanas} = data
    return axiosConfig.get(`/test/`,{
        // params:data.filtrosRealtimePanel,
            validateStatus:function(status){
                return status < 500;
            }
    })


}


