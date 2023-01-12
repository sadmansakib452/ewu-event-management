import swal from "sweetalert";

export const showPopAlert = (title,text,icon,buttonTxt) =>{

    swal({
        title: title,
        text: text,
        icon: icon,
        button: buttonTxt,
      });
}