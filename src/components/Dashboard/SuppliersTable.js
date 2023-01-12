import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteSupplierInfo } from "./DeleteUserInfo";
import { UserContext } from "../../App";

export default function SuppliersTable() {
  const [rows, setRows] = React.useState([]);
  const [
    loggedInUser,
    setLoggedInUser,
    getAllUserData,
    setGetAllUserData,
    getAllEventData,
    setGetAllEventData,
    getAllSupplierData,
    setGetAllSupplierData,
  ] = React.useContext(UserContext);
  console.log('from supplier table',getAllSupplierData)
  React.useEffect(() => {
   
    setRows(getAllSupplierData);
  }, []);

  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(async () => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        const deletedData = await deleteSupplierInfo(id)
        
        const filteredSuppliers = getAllSupplierData.filter((supplier) => supplier.id !== id);
        setGetAllSupplierData(filteredSuppliers);
        // const deletedData = await deleteEventInfo(id).then((response) => {
        //   const filteredEvents = getAllEventData.filter(
        //     (event) => event.id !== id
        //   );
        //   setGetAllEventData(filteredEvents);
        // });
        
        console.log(deletedData);
        console.log("deleted", id);
      });
    },
    []
  );

  const columns = React.useMemo(
    () => [
      { field: "id", headerName: "ID", width: 210 },

      { field: "firstName", headerName: "First name", width: 130 },
      { field: "lastName", headerName: "Last name", width: 130 },
      { field: "companyName", headerName: "Company Name", width: 130 },
      {
        field: "supplierCategory",
        headerName: "Supplier Category",
        width: 130,
      },
      { field: "email", headerName: "Email", width: 230 },
      { field: "phoneNumber", headerName: "Phone Number", width: 140 },

      {
        field: "actions",
        headerName: "Action",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
        ],
      },
    ],
    [deleteUser]
  );

  return (
    <div>
      <h3>Suppliers Information</h3>
      <div style={{ height: 450, width: "100%" }}>
        <DataGrid columns={columns} rows={rows} />
      </div>
    </div>
  );
}
