import axios from "axios";



export const saveUserEvent = (id,event) => {
return axios.post(`http://localhost:5000/addUserEvent/${id}`,event)
.then(response => {
    console.log('from 22 line of Event Functionalitis', response)
    return response
})
.catch(err => {
    console.log('from 25 line of Event Functionalitis', err)
    return err
});
};

export const LoadUserEvent = (id) =>{
   return axios.get(`http://localhost:5000/userEvents/${id}`)
    .then(response => {
     
        return response.data
    })
    .catch(err => {
        return err
    })
}

export const DeleteUserEvent = (id) =>{

   return axios.delete(`http://localhost:5000/deleteUserEvent/${id}`)
    .then(response => {
    
        console.log(response)
        return response
    })
    .catch(err => err)
}