import { React, useState,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {columns} from '../TableTest/TableData'
import Container from '@mui/material/Container';





const Table = () => {
   
    const [user,setUser] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:5000/users")
      .then(response => response.json())

      .then(data => setUser(data))
    },[])
    

    let rows = []
    user.map((user, index) => {
    rows.push({
      id: user._id,
      studentId: user.studentId,
      role: user.userRoll,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      skill: user.skill,
      userGender: user.userGender,
    });
  });
console.log(user)

  return (
    <Container style={{ height: 400, width: "100%" }} maxWidth='xl' >
      <h3>User Table Data</h3>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(itm) => console.log(itm)}
      />
   
    </Container>
  );
};
export default Table;
