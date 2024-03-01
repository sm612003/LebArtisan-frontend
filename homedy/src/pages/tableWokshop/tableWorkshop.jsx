import { Box, Button, useTheme, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { UserContext } from "../../UserContext/UserContext";

const DeleteConfirmationDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this workshop?
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

const TableWorkshop = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [workshopData, setWorkshopData] = useState([]);
  const { user } = useContext(UserContext);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [workshopToDelete, setWorkshopToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user && user.artistId) {
          // Retrieve artist ID from the user context
          const artistId = user.artistId;

          // Make an HTTP GET request to fetch workshops related to the artist's ID
          const response = await Axios.get(`${process.env.REACT_APP_BACKEND}/workshop/Artisan`, {
            headers: {
              Authorization: `Bearer ${user.token}`
            },
            params: {
              artisanId: artistId
            }
          });

          // Update workshop data state with the fetched data
          setWorkshopData(response.data);
        }
      } catch (error) {
        console.error("Error fetching workshop data:", error);
      }
    };

    fetchData();
  }, [user]); // Run effect when user context changes
      // Check if the current user is an artist for this event


  console.log(workshopData)
  const handleDelete = (id) => {
    setWorkshopToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      // Send delete request to delete the workshop
      // Update workshop data after successful deletion
      setDeleteDialogOpen(false);
    } catch (error) {
      console.error("Error deleting workshop:", error);
    }
  };

  const handleCancelDelete = () => {
    setDeleteDialogOpen(false);
    setWorkshopToDelete(null);
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "date_time", headerName: "Date Time", flex: 1 },
    { field: "capacity", headerName: "Capacity", flex: 1 },
    { field: "cost", headerName: "Cost", flex: 1 },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: ({ row }) => (
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => handleDelete(row._id)}
          style={{ color: 'white' }}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Workshop Information" subtitle="Managing workshops" />
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
        <DataGrid rows={workshopData} columns={columns} getRowId={(row) => row._id} />
        <DeleteConfirmationDialog
          open={deleteDialogOpen}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      </Box>
    </Box>
  );
};

export default TableWorkshop;
