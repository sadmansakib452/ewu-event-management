export const deleteSupplierInfo = (id) =>{

   return fetch(`http://localhost:5000/supplier/${id}`,  { method: 'DELETE' })
    .then((response) => {
       return response
    })
    
    .catch((error) => {
      return error;
    });
}


export const deleteUserInfo = (id) =>{
   return fetch(`http://localhost:5000/deleteUser/${id}`,  { method: 'DELETE' })
   .then((response) => {
       return response
    })
    
   .catch((error) => {
      return error;
    });

}
export const deleteEventInfo = (id) =>{
   return fetch(`http://localhost:5000/event/${id}`,  { method: 'DELETE' })
   .then((response) => {
       return response
    })
    
   .catch((error) => {
      return error;
    });

}