import * as axios from "axios";

const baseURL = 'https://api.spacexdata.com/v4/'

export const api = {
    getPastLaunches(){
        return axios.get(`${baseURL}launches/upcoming`)
            .then(function (response) {
                // handle success
                console.log(response);
                console.log(response.data[0].name);
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    getLaunches(){
        return axios.get(`${baseURL}launches/upcoming`)
            .then(function (response) {
                // handle success
                console.log(response);
                console.log(response.data[0].name);
            })
            .catch(function (error) {
                console.log(error);
            })
    },
}

//https://api.spacexdata.com/v5/launches/     .name = name, .rocket = id
// https://api.spacexdata.com/v4/rockets/ +id  .name  = Falcon 1


//  https://api.spacexdata.com/v4/launches/upcoming  upcoming
// .rocket = id
// .name