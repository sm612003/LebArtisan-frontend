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
    const [selectedArtisanStatus, setSelectedArtisanStatus] = useState({});

    // const handleOpenModal = (event) => {
    //     setSelectedEvent(event);
    //     setEventArtisans(event?.Artisans || []);

    //     // Reset selectedArtisanStatus before initializing
    //     setSelectedArtisanStatus({});

    //     // Initialize selectedArtisanStatus with the current status of each artisan
    //     event?.Artisans.forEach((artisan, index) => {
    //         if (index === 0) { // Only consider the first artisan
    //             // setSelectedArtisan(artisan.artist); // Set selectedArtisan to the ID of the first artisan
    //             console.log(event)
    //             console.log("Artisan:", artisan.artist); // Log artisan
    //             console.log("Status:", artisan.status);
    //         }
    //         setSelectedArtisanStatus(prevStatus => ({
    //             ...prevStatus,
    //             [artisan.artist]: artisan.status
    //         }));
    //     });

    //     setOpenModal(true);
    // };

    const handleOpenModal = (event) => {
        setSelectedEvent(event);
        setEventArtisans(event?.Artisans || []);

        // Reset selectedArtisanStatus before initializing
        setSelectedArtisanStatus({});

        // Log all artisans
        console.log("Artisans:");
        event?.Artisans.forEach((artisan, index) => {
            // console.log(`Artisan ${index + 1}:`);
            // console.log(artisan.artist);
        });

        // Initialize selectedArtisanStatus with the current status of each artisan
        event?.Artisans.forEach((artisan) => {
            setSelectedArtisanStatus(prevStatus => ({
                ...prevStatus,
                [artisan.artist]: artisan.status
            }));
        });

        setOpenModal(true);
    };

    // console.log(selectedArtisanStatus)




    // console.log(selectedArtisan)



    const handleStatusChange = (event, artistId) => {
        const newStatus = event.target.value;
        setSelectedArtisanStatus(prevStatus => ({
            ...prevStatus,
            [artistId]: newStatus  // Use artistId instead of _id
        }));
    };


    // const handleUpdateStatus = async (event) => {
    //     try {
    //         const participationRequests = Object.entries(selectedArtisanStatus)
    //             .map(([artistId, status]) => ({ artistId, status }));

    //         console.log("part", participationRequests);

    //         // Send the participationRequests to the backend
    //         const response = await Axios.put(`${process.env.REACT_APP_BACKEND}/events/admin/manage`, {
    //             eventId: selectedEvent._id,
    //             participationRequests
    //         });

    //         console.log(response.data.message);
    //         // Handle the response as needed

    //         // Close the modal or perform any additional actions
    //         handleCloseModal();
    //     } catch (error) {
    //         console.error('Error updating status:', error);
    //     }
    //     console.log("status", selectedArtisanStatus)
    // };

    const handleUpdateStatus = async () => {
        try {
            // Create an array to store the updated participation requests
            const updatedParticipationRequests = [];

            // Loop through selectedArtisanStatus object to create participation requests
            Object.entries(selectedArtisanStatus).forEach(([artistId, status]) => {
                // Create a participation request object for each artist
                updatedParticipationRequests.push({ artistId, status });
            });
            console.log(selectedEvent._id)
            console.log(updatedParticipationRequests)

            // Send the updated participationRequests to the backend
            const response = await Axios.put(`${process.env.REACT_APP_BACKEND}/events/admin/manage`, {
                eventId: selectedEvent._id,
                participationRequests: updatedParticipationRequests
            });

            console.log(response.data);
            // Handle the response as needed

            // Close the modal or perform any additional actions
            handleCloseModal();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };



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
                            BrandName: artisanResponse.data.BrandName,
                            status: artisan.status
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
    }, []); // Empty dependency array to run only once
    // console.log("eventss",events)
    // console.log("eventartisan",eventArtisans)

    useEffect(() => {
        // console.log("Selected artisan:", selectedArtisan);
    }, [selectedArtisan]);



    const handleCloseModal = () => {
        setSelectedEvent(null);
        setOpenModal(false);
    };
    // console.log(artisanStatus)

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
    // console.log("statussss", artisanStatus);
    // console.log("astisittt", selectedArtisan ? selectedArtisan : "No selected artisan");
    // console.log("event", selectedEvent ? selectedEvent : "No selected event");


    return (
        <Box m="20px">
            <Header title="Events Information" subtitle="Managing your events info " />
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
                    <div key={artisan._id}> {/* Access _id of the artisan */}
                        <p>{artisan.BrandName}</p>
                        <FormControl fullWidth>
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={selectedArtisanStatus[artisan.artist] || artisan.status}
                                onChange={(event) => handleStatusChange(event, artisan.artist)}
                            >
                                <MenuItem value="pending">Pending</MenuItem>
                                <MenuItem value="accepted">Accepted</MenuItem>
                                <MenuItem value="rejected">Rejected</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                ))}

                <Button style={{ backgroundColor: 'white' }} onClick={handleUpdateStatus}>Update</Button>
            </DialogContent>


        </Box>
    );
};

export default AllEvents;
