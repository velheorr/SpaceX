import * as axios from "axios";

const baseURL = 'https://api.spacexdata.com/v4/'
// api для получение данных о полёте
// и формирование данных в нужный вид, который будет использоваться
export const api = {
    // получение всех полётов
    // time = параметр, какие полёты получать (прошлые или текущие)
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
    // получение имени ракеты по её id
    getRocketName(id){
        return axios.get(`${baseURL}rockets/${id}`)
            .then(function (response) {
                return response.data.name;
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    // получение данных о одном полёте по id
    async getOne(id){
        let responce = await axios.get(`${baseURL}launches/${id}`)
        const res = responce.data
        const rocket = await api.getRocketName(res.rocket)
        return {date: res.date_local, name: res.name, flight_number: res.flight_number, rocketName: rocket }
    }

}
