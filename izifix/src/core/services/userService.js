import axios from  'axios'
export class userService{
    getAllUsers(){
        return axios.get("https://localhost:7096/api/v1/users")
    }
    getById(id){
        return axios.get("https://localhost:7096/api/v1/users"+id);
    }
    registerUser(name,lastname,cellphone,password,email,address,rol){
        return axios.post("https://localhost:7096/api/v1/users",{
            name,lastname,cellphone,password,email,address,rol
        })
    }
    editUser(id,name,lastname,cellphone,password,email,address,rol){
        return axios.put("https://localhost:7096/api/v1/users"+id,name,lastname,cellphone,password,email,address,rol);
    }
    async logIn(email,password){
        let id=0;
        await this.getAllUsers().then(response=>{
            response.data.forEach(element => {
                if(element.email==email & element.password==password){
                    console.log("encontrado");
                    id= element.id;
                    console.log("id user encontrado",id);
                }
            });
        })
        console.log("id en funcion",id);
        return id;
    }
}