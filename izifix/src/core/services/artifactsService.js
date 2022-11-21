import axios from  'axios'
export class artifactService{
    getAllUsers(){
        return axios.get("https://localhost:7096/api/v1/artifacts")
    }
    registerArtifact(userId,name,url){
        return axios.post("https://localhost:7096/api/v1/artifacts",{
            name,url,userId
        })
    }

    getByUserId(id){
        return axios.get('https://localhost:7096/api/v1/users/'+id+'/artifacts')

    }
    deleteArtifact(id){
        return axios.delete('https://localhost:7096/api/v1/artifacts/'+id)
    }
}