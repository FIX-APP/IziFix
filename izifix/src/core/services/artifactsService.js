import axios from  'axios'
export class artifactService{
    getAllUsers(){
        return axios.get("http://localhost:3000/artifacts")
    }
    registerArtifact(userId,name,url){
        return axios.post("http://localhost:3000/artifacts",{
            userId,name,url
        })
    }
    async getByUserId(id){
        let arr=[];
        await this.getAllUsers().then(response=>{
            response.data.forEach(element => {
                if(element.userId==id){
                    arr.push(element);
                }
            });
        })
        print("Artefactos");
        return arr;
    }
}