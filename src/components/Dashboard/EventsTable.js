import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteEventInfo } from "./DeleteUserInfo";
import { UserContext } from "../../App";

export default function EventsTable() {
  const [
    loggedInUser,
    setLoggedInUser,
    getAllUserData,
    setGetAllUserData,
    getAllEventData,
    setGetAllEventData,
  ] = React.useContext(UserContext);

  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    setRows(getAllEventData);
  }, []);

  console.log('from line 23 of Events table',getAllEventData)
  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(async () => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        const deletedData = await deleteEventInfo(id)
          const filteredEvents = getAllEventData.filter(
            (event) => event.id !== id
          );
          setGetAllEventData(filteredEvents);
       
        console.log(deletedData);
        console.log("deleted", id);
      });
    },
    []
  );

  const columns = React.useMemo(
    () => [
      { field: "id", headerName: "ID", width: 210 },

      { field: "date", headerName: "Date", width: 130 },
      { field: "eventName", headerName: "Event Name", width: 230 },
      { field: "budget", headerName: "Budget", width: 110 },
      { field: "supplierId", headerName: "Supplier Id", width: 230 },
      { field: "guestName", headerName: "Guest", width: 130 },
      { field: "location", headerName: "Venue", width: 230 },
      { field: "imageURL", headerName: "Image URL", width: 230 },

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
      <h3>Events Information</h3>
      <div style={{ height: 450, width: "100%" }}>
        <DataGrid columns={columns} rows={rows} />
      </div>
    </div>
  );
}
