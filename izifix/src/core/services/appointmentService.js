import axios from  'axios'
export class appointmentService{
    getAllAppointments(){
        return axios.get("http://localhost:3000/appointments")
    }
    registerAppointment(userId,technicianId,description){
        return axios.post("http://localhost:3000/appointments",{
            userId,technicianId,description
        })
    }
    delete(id){
        return axios.delete("http://localhost:3000/appointments"+id);

    }
    async getByUserId(id){
        let arr=[];
        await this.getAllAppointments().then(response=>{
            response.data.forEach(element => {
                if(element.userId==id){
                    arr.push(element);
                }
            });
        })
        console.log("Appointments");
        console.log(arr);
        return arr;
    }
}