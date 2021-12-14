import * as axios from "axios";

const baseURL = 'https://api.spacexdata.com/v4/'

export const api = {
    async getLaunches(time){
        let res = await axios.get(`${baseURL}launches/${time}`)
        const launchData = res.data.map(item =>{
            return { id: item.id, name: item.name, rocketId: item.rocket, date: item.date_utc}
        })
        const rockets = await Promise.all(launchData.map(item => {
            return api.getRocketName(item.rocketId)
        }))
        launchData.map((item,i) => item.rocketName = rockets[i] )
        return launchData
    },
    getRocketName(id){
        return axios.get(`${baseURL}rockets/${id}`)
            .then(function (response) {
                return response.data.name;
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    async getOne(id){
        let responce = await axios.get(`${baseURL}launches/${id}`)
        const res = responce.data
        const rocket = await api.getRocketName(res.rocket)
        return {date: res.date_local, name: res.name, flight_number: res.flight_number, rocketName: rocket }
    }

}
