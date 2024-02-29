// import { Box, Typography, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataTeam } from "../../data/mockData";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// import Header from "../../components/Header";

// const Team = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const columns = [
//     { field: "id", headerName: "ID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "accessLevel",
//       headerName: "Access Level",
//       flex: 1,
//       renderCell: ({ row: { access } }) => {
//         return (
//           <Box
//             width="60%"
//             m="0 auto"
//             p="5px"
//             display="flex"
//             justifyContent="center"
//             backgroundColor={
//               access === "admin"
//                 ? colors.greenAccent[600]
//                 : access === "manager"
//                 ? colors.greenAccent[700]
//                 : colors.greenAccent[700]
//             }
//             borderRadius="4px"
//           >
//             {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
//             {access === "manager" && <SecurityOutlinedIcon />}
//             {access === "user" && <LockOpenOutlinedIcon />}
//             <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
//               {access}
//             </Typography>
//           </Box>
//         );
//       },
//     },
//   ];

//   return (
//     <Box m="20px">
//       <Header title="Artist Information" subtitle="Managing your info " />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//         }}
//       >
//         <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
//       </Box>
//     </Box>
//   );
// };

// export default Team;
import { Box, Button, Typography, useTheme, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const DeleteConfirmationDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this artist?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [artistData, setArtistData] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [artistToDelete, setArtistToDelete] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/artist/read/all");
        setArtistData(response.data);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(artistData)
  

  const handleDelete = (id) => {
    setArtistToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      // Send delete request to delete the artist
      // Update artist data after successful deletion
      setDeleteDialogOpen(false);
    } catch (error) {
      console.error("Error deleting artist:", error);
    }
  };

  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
    setArtistToDelete(null);
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    // { field: "userId.name", headerName: "Name", flex: 1 },
    {
      field: "userId.name",
      headerName: "Name",
      flex: 1,
      valueGetter: (params) => params.row.userId ? params.row.userId.name : ''
    },
    
    { field: "userId.email", headerName: "Email", flex: 1, 
      valueGetter: (params) => params.row.userId ? params.row.userId.email : '' },
    // { field: "userId.role", headerName: "Role", flex: 1 ,
    // valueGetter: (params) => params.row.userId ? params.row.userId.role : ''},

    { field: "userId.location", headerName: "Location", flex: 1, 
      valueGetter: (params) => params.row.userId ? params.row.userId.location : '' },
    // { field: "userId.whatsapp", headerName: "WhatsApp", flex: 1 , valueGetter: (params) => params.row.userId ? params.row.userId.location : '' },
    // { field: "userId.instagram", headerName: "Instagram", flex: 1 },
    // { field: "userId.facebook", headerName: "Facebook", flex: 1 },
    { field: "categoryId", headerName: "Category ID", flex: 1 },
    { field: "craftType", headerName: "Craft Type", flex: 1 },
    { field: "bio", headerName: "Bio", flex: 1 },
    { field: "BrandName", headerName: "Brand Name", flex: 1 },
    { field: "about_us.title", headerName: "About Title", flex: 1 },
    { field: "about_us.description", headerName: "About Description", flex: 1 },
    { field: "about_us.video", headerName: "About Video", flex: 1 },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: ({ row }) => (
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete(row._id)}
          style={{color:'white'}}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Artist Information" subtitle="Managing your info " />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={artistData} columns={columns} getRowId={(row) => row._id} />
        <DeleteConfirmationDialog
          open={deleteDialogOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      </Box>
    </Box>
  );
};

export default Team;

