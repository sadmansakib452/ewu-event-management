import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
// import { useForm,Controller } from "react-hook-form";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const suppliers = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

export function MultipleSelectCheckmarks({control, Controller, suppliers}) {
   
  const [supplierName, setSupplierName] = React.useState([]);

//   const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   const handleChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setSupplierName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

  return (
    
        <Controller
        name="supplierId"
        control={control}
        render ={({field: {onChange, ...rest}}) =>(




          <FormControl sx={{ width: 1 }}>
          <InputLabel id="demo-multiple-checkbox-label">Suppliers</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={supplierName}
            onChange={(event) => {
              onChange(event);
              const {
                target: { value },
              } = event;
              setSupplierName(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
              );
              // setValue(event);
            }}
            input={<OutlinedInput label="Suppliers" />}
            renderValue={(selected) => selected.join(', ')}
            
            MenuProps={MenuProps}
          >
            {suppliers.map((supplier) => (
              <MenuItem key={supplier.id} value={supplier.id}>
                <Checkbox checked={supplierName.indexOf(supplier.id) > -1} />
                <ListItemText primary={`${supplier.companyName} (${supplier.supplierCategory})` } />
              </MenuItem>
            ))}
          </Select>
        </FormControl>



        )}
        />




     
      
    
  );
}
