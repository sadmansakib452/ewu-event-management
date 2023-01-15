import swal2 from "sweetalert2";

export const showPopAlert = (title, text, icon, buttonTxt) => {
  swal2.fire({
    title: title,
    text: text,
    icon: icon,
    showConfirmButton: true,
    confirmButtonText: buttonTxt,
  });
};

export const showEventPopAlert = (event, supplier) => {

console.log('From Event Pop Alert', event, supplier);
  const text = `<b>Event Information:</b><br/>
                <b>Date:</b><span  style="color: green"> ${event.date}</span> <br/>
                <b>Location: </b>${event.location} <br/>
                <b>Guest:</b> ${event.guestName} <br/><br/>
                <b>Supplier:</b> <br/>
                
                ${supplier.map((data,index) => {

                  // return `${index+1}: ${data[0].companyName} (${data[0].supplierCategory}) `  
               
                  return `${data[0].companyName} (${data[0].supplierCategory})<br/>`
                  
                }).join('')}
                <br/>
                <h5><b>Description</b></h5>
                <p>${event.description}</p>
               
                `;
  swal2.fire({
    title: event.eventName,
    html: text,
    imageUrl: event.imageURL,
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: "Custom image",
  });
};
