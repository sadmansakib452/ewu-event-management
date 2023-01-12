import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const handleImageUpload = (file) => {
  const imageData = new FormData();
  imageData.set("key", "440b0bdaa9b4f7d82c91b63a1f2965d2");
  imageData.append("image", file);

  return toast.promise(
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        toast.success("successfully uploaded image");

        return response;
      })
      .catch(function (error) {
        toast.error(error.message);
        return error;
      }),

    {
      pending: {
        render() {
          return "Uploading image";
        },
        icon: false,
      },
    }
  );
};

export const saveEventToDatabase = (imageURL, eventData) => {
  const url = `http://localhost:5000/addEvent`;

  const eventInformation = {
    imageURL,
    ...eventData,
  };
  console.log(eventInformation);
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(eventInformation),
  }).then(response =>{ 
    for (var pair of response.headers.entries()) { // accessing the entries
      if (pair[0] === 'x-total-count') { // key I'm looking for in this instance
        this.setState({
          total: pair[1] // saving that value where I can use it
        })
      }
    }
    return response.json();
   
  })
    .catch(err => {
      return err
    })
    
};

export const saveSupplierToDatabase = (imageURL, supplierData) => {
  const url = `http://localhost:5000/addSupplier`;

  const supplierInformation = {
    imageURL,
    ...supplierData,
  };
  console.log(supplierInformation);
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(supplierInformation),
  }).then((response) => {
    for (var pair of response.headers.entries()) { // accessing the entries
      if (pair[0] === 'x-total-count') { // key I'm looking for in this instance
        this.setState({
          total: pair[1] // saving that value where I can use it
        })
      }
    }
    return response.json();
  });
};


export const checkSupplierEmail = (email) => {
  const url = `http://localhost:5000/supplier/${email}`;

  return fetch(url).then((response) => response);
};

export const checkEventDate = (date) => {
  const url = `http://localhost:5000/event/${date}`;

  return fetch(url).then((response) => {
    console.log('from checkEventDate',date)
   return response
  
  });
};



export const loadEvents = () => {


 return  fetch("http://localhost:5000/events")
      .then((response) => response.json())

      .then((data) => {

        const updatedData = data.map((event) => {
          return {
            id: event._id,
            date: event.date,
            eventName: event.eventName,
            supplierId: event.supplierId,
            guestName: event.guestName,
            location: event.location, 
            imageURL: event.imageURL     
            
          };
        });
          return updatedData
          // setGetAllEventData(updatedData)
      });
};

export const loadUsers = () => {
  return fetch("http://localhost:5000/users")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    

    const updatedData = data.map((user, index) => {
      return {
        id: user.firebaseUID,
        databaseID: user._id,

        studentId: user.studentId,
        role: user.userRoll,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        skill: user.skill,
        userGender: user.userGender,
      };
    });

    return updatedData;
  })

};

export const loadSuppliers = () =>{
 return fetch("http://localhost:5000/suppliers")
  .then((response) => response.json())

  .then((data) => {

    const updatedData = data.map((supplier, index) => {
      return {
        id: supplier._id,

     
        firstName: supplier.firstName,
        lastName: supplier.lastName,
        companyName: supplier.companyName,
        supplierCategory: supplier.supplierCategory,
        email: supplier.email,
        phoneNumber: supplier.phoneNumber,
        imageURL: supplier.imageURL
       
        
      };
    });
      return updatedData
  });
}