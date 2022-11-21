import axios from  'axios'
export class appointmentService{
    getAllAppointments(){
        return axios.get("https://localhost:7096/api/v1/appointments")
    }
    registerAppointment(userId,technicianId,description){
        return axios.post("https://localhost:7096/api/v1/appointments",{
            userId,technicianId
        })
    }
    delete(id){
        return axios.delete("https://localhost:7096/api/v1/appointments"+id);

    }
    getByUserId(id){
        return axios.get('https://localhost:7096/api/v1/users/'+id+'/appointments');
    }
}