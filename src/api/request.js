import axios from "axios";

/**
 * Request Wrapper with default success/error actions
 */
const request = (options) => {
    /**
     * Create an Axios Client with defaults
     */
    let headers = {
        'Content-Type': 'application/json',
        "Accept": "application/json",
    }
    const client = axios.create({
        baseURL: "http://capital.hopeleaftechnologies.com/",
        headers: headers
    });

    const onSuccess = (response) => {
        return response.data;
    }

    const onError = async (error) => {
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                //If refresh token expires
                // if(options.url.includes('refresh')){
                //     logout()
                // }else{
                //     //If other api's fails
                //     await callRefresh()
                //     setupRefreshTimer();
                //     request(options);
                // }
                return error.response.data;
            }
            if(error.response.status === 404){
                // history.push('/404')
            }
            return Promise.reject(!!error.response.data ? error.response.data : error.response || error.message);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the
            // browser and an instance of
            // http.ClientRequest in node.js
            // history.push('/app/error/500')

            return Promise.reject(error.request);
        } else {
            // Something else happened while setting up the request
            // triggered the error
            // history.push('/app/error/500')
            return Promise.reject(error.message);
        }

    }

    return client(options)
        .then(onSuccess)
        .catch(onError);
}


export default request;