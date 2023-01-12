export const supplierCategory = [
    {
      label: "Decorator",
      value: "decorator",
    },
    {
      label: "Audio-visual",
      value: "audio-visual",
    },
    {
      label: "Artists",
      value: "artists",
    },
    {
      label: "Fabricator",
      value: "fabricator",
    },
    {
      label: "Florist",
      value: "florist",
    },
    {
      label: "Photographer",
      value: "photographer",
    },
    {
      label: "Designer",
      value: "designer",
    },
    {
      label: "Rental shops",
      value: "rental-shops",
    },
    {
      label: "Security",
      value: "security",
    },
    {
      label: "Technical",
      value: "technical",
    },
    {
      label: "Stationery & printer",
      value: "stationery&printer",
    },
    {
      label: "Permission",
      value: "permission",
    },
    {
      label: "Housekeeping",
      value: "housekeeping",
    },
    {
      label: "Fireworks",
      value: "fireworks",
    },
    {
      label: "Valet parking",
      value: "valet-parking",
    }
  ];


  export const getSupplierData = () =>{
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
       
        
      }
    })
   return updatedData;
  })
  }