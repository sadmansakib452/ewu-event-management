import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { handleDeleteUser } from "../Authentication/Firebase/GoogleAtuh/GoogleAuth";
import { deleteUserInfo } from "./DeleteUserInfo";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../App";

export default function UsersTable() {
  const [rows, setRows] = React.useState([]);
  const [
    loggedInUser,
    setLoggedInUser,
    getAllUserData,
    setGetAllUserData,
    getAllEventData,
    setGetAllEventData,
  ] = React.useContext(UserContext);

  React.useEffect(() => {
    setRows(getAllUserData);
  }, []);

  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(async () => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id[0]));

        const result = await deleteUserInfo(id).then((response) => {
          toast.success("successfully deleted");

          const filteredUser = getAllUserData.filter((user) => {
            console.log("from user table ", user, id[0]);
            return user.id !== id[0];
          });
          setGetAllUserData(filteredUser);
        });
      });
    },
    []
  );

  const columns = React.useMemo(
    () => [
      { field: "id", headerName: "Firebase ID", width: 210 },
      { field: "databaseID", headerName: "Database ID", width: 210 },

      { field: "studentId", headerName: "Student ID", width: 140 },
      { field: "role", headerName: "Role", width: 90 },
      { field: "firstName", headerName: "First name", width: 130 },
      { field: "lastName", headerName: "Last name", width: 130 },
      { field: "email", headerName: "Email", width: 230 },
      { field: "phoneNumber", headerName: "Phone Number", width: 140 },
      { field: "skill", headerName: "Skill", width: 130 },
      { field: "userGender", headerName: "gender", width: 80 },
      {
        field: "actions",
        headerName: "Action",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser([params.id, params.row.databaseID])}
          />,
        ],
      },
    ],
    [deleteUser]
  );

  return (
    <div>
      <h3>Users Information</h3>
      <div style={{ height: 450, width: "100%" }}>
        <ToastContainer position="bottom-left" />
        <DataGrid columns={columns} rows={rows} />
      </div>
    </div>
  );
}
