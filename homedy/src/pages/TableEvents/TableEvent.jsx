import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Box, useTheme, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from "../../components/Header";
import { tokens } from "../../theme";

const AllEvents = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedArtisan, setSelectedArtisan] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [openModal, setOpenModal] = useState(false);
const [eventArtisans, setEventArtisans] = useState([]);
const [artisanStatus, setArtisanStatus] = useState({});

// Modify handleStatusChange function to update the selected status
const handleStatusChange = (event, artistId) => {
    const newStatus = event.target.value;
    setArtisanStatus(prevStatus => ({
        ...prevStatus,
        [artistId]: newStatus
    }));
};


// Modify handleOpenModal function to set the selected event
const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setEventArtisans(event.Artisans); // Set the list of artisans for the selected event
    
    // Initialize the status for each artisan
    const initialStatus = {};
    event.Artisans.forEach(artisan => {
        initialStatus[artisan._id] = artisan.status;
    });
    setArtisanStatus(initialStatus);

    setOpenModal(true);
};
const handleUpdateStatus = async () => {
    try {
        console.log("Artisan Status:", artisanStatus); // Log artisanStatus state
        // Create an array of participation requests with updated statuses
        const participationRequests = Object.entries(artisanStatus)
            .map(([artistId, status]) => ({ artistId, status }));

        console.log("Participation Requests:", participationRequests); // Log participationRequests array

        // Send a single PUT request with updated participation requests
        const response = await Axios.put(`${process.env.REACT_APP_BACKEND}/events/manage`, {
            eventId: selectedEvent._id,
            participationRequests
        });

        console.log(response.data.message); // Log success message
        handleCloseModal();
    } catch (error) {
        console.error('Error updating status:', error);
    }
};








// Modify handleUpdateStatus function to use the updated status for the selected artisan



    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await Axios.get(`${process.env.REACT_APP_BACKEND}/events/read/all`);
                const eventsData = response.data;
                const updatedEvents = await Promise.all(eventsData.map(async event => {
                    const artisansData = await Promise.all(event.Artisans.map(async artisan => {
                        const artisanResponse = await Axios.get(`${process.env.REACT_APP_BACKEND}/artist/${artisan.artist}`);
                        return {
                            ...artisan,
                            BrandName: artisanResponse.data.BrandName, // Assuming brandName is fetched from artisan data
                            status: artisan.status // Assuming status is already available in artisan data
                        };
                    }));
                    return {
                        ...event,
                        Artisans: artisansData
                    };
                }));
                setEvents(updatedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

   

    const handleCloseModal = () => {
        setSelectedEvent(null);
        setOpenModal(false);
    };
console.log(artisanStatus)

    const columns = [
        { field: '_id', headerName: 'ID', flex: 1 },
        { field: 'title', headerName: 'Title', flex: 1 },
        { field: 'description', headerName: 'Description', flex: 1 },
        { field: 'location', headerName: 'Location', flex: 1 },
        { field: 'date', headerName: 'Date', flex: 1 },
        { field: 'start_time', headerName: 'Start Time', flex: 1 },
        { field: 'end_time', headerName: 'End Time', flex: 1 },
        { 
            field: 'artisans', 
            headerName: 'Artisans', 
            flex: 1, 
            renderCell: ({ row }) => (
                <Button variant="outlined" onClick={() => handleOpenModal(row)}>Edit</Button>
            )
            
        },
    ];
    console.log("statussss", artisanStatus);
console.log("astisittt", selectedArtisan ? selectedArtisan : "No selected artisan");
console.log("event", selectedEvent ? selectedEvent : "No selected event");


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
                <DataGrid 
                    rows={events} 
                    columns={columns} 
                    getRowId={(row) => row._id} 
                    components={{
                        noRowsOverlay: () => <div>No events found</div>,
                    }}
                    rowStyle={{
                        backgroundColor: colors.primary,
                        '&.Mui-selected': {
                            backgroundColor: colors.greenAccent,
                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: colors.greenAccent,
                        },
                    }}
                    headerClassName="custom-header"
                />
            </Box>

            {/* Modal for editing artisan status */}
            <DialogContent>
    <DialogContentText>
        Edit Artisan Status
    </DialogContentText>
    {selectedEvent && selectedEvent.Artisans.map((artisan) => (
        <div key={artisan._id}>
            <p>{artisan.BrandName}</p>
            <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
    value={artisanStatus[artisan._id]}
    onChange={(event) => handleStatusChange(event, artisan._id)}
>

                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="accepted">Accepted</MenuItem>
                    <MenuItem value="rejected">Rejected</MenuItem>
                </Select>
            </FormControl>
            <Button style={{backgroundColor:'white'}} onClick={handleUpdateStatus}>Update</Button>
        </div>
    ))}
</DialogContent>



        </Box>
    );
};

export default AllEvents;
