import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const DatePickerMUI = ({ control, register}) => {

 return <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller
      name="MUIPicker"
      control={control}
      render={({ field: { onChange, ...rest } }) => (
        <DatePicker
          id="date-picker-dialog"
          margin="normal"
          inputFormat="DD/MM/YYYY"
          label="Select Event Date"
          // value={value}
        
          onChange={(event) => {
            onChange(event);
            // setValue(event);
          }}
          renderInput={(params) => <TextField fullWidth {...params} 
          
          {...register("selectedDate", {
            required: true,
          })}
          />}
          {...rest}
        />
      )}

      //controller
    />
  </LocalizationProvider>;
};
