// import React, { useState, useEffect, useContext } from "react";
// import TabButton from "../../components/tabbutton";
// import axios from 'axios';
// import { useParams } from "react-router-dom";
// import { UserContext } from "../../UserContext/UserContext";

// const Eventdetails = () => {
//   const [event, setEvent] = useState(null);
//   const [tab, setTab] = useState('location');
//   const [artistStatus, setArtistStatus] = useState(null); // State to store artist's participation status
//   const [requestSent, setRequestSent] = useState(false); // State to track whether request has been sent
//   const { user } = useContext(UserContext);

//   // Retrieve event ID from URL parameter
//   const { eventId } = useParams();

//   useEffect(() => {
//     // Fetch event details
//     const fetchEvent = async () => {
//       try {
//         console.log("fetchinnnn")
//         const response = await axios.get(`http://localhost:5000/events/${eventId}`);
//         if (response) {
//           setEvent(response.data);
//           console.log(response.data)

//         }
//         else {
//           console.log("dndnndd")
//         }
//         console.log(user._id)

//       } catch (error) {
//         console.error('Error fetching event details:', error);
//         setArtistStatus('error');
//       }
//     };

//     fetchEvent();



//     if (event && user) {
//       const getUser = () => {
//         const artistRequest = event?.Artisans.find(request => request.artist.userId === user._id);
//         console.log("artiststatuss", artistRequest)
//         if (artistRequest) {
//           setArtistStatus(artistRequest.status);
//         }

//       }
//       getUser()
//     }
//   }, [eventId, user]);

//   // Return null if event is null
//   // if (!event) return null;
//   // console.log(artistStatus);
//   // console.log(event.Artisans);

//   // console.log("Artist Status:", artistStatus);



//   const handleJoinEvent = async () => {
//     try {
//       const response = await axios.post(`http://localhost:5000/events/request`, {
//         eventId: eventId
//       });
//       console.log(response.data); // Log the response from the backend

//       // Update artist status if successful
//       setArtistStatus("pending");
//       setRequestSent(true); // Set request sent to true
//     } catch (error) {
//       console.error('Error joining event:', error);
//     }
//   };

//   const handleTabChange = (id) => {
//     setTab(id);
//   };

//   const TAB_DATA = [
//     {
//       title: "Location",
//       id: "location",
//       content: (
//         <ul className="list-disc pl-2 text-E0EFF6" style={{ color: '#0E4D4F' }}>
//           <li>Location: {event && event.location}</li>
//         </ul>
//       ),
//     },
//     {
//       title: "Time",
//       id: "date_time",
//       content: (
//         <ul className="list-disc pl-2 text-E0EFF6" style={{ color: '#0E4D4F' }}>
//           <li>Start Time: {event && event.start_time}</li>
//           <li>End Time: {event && event.end_time}</li>
//         </ul>
//       ),
//     },
//   ];

//   return (
//     <section className="text-white" id="about">
//       <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-28" style={{ backgroundColor: '#E0EFF6' }}>
//         <img src={`http://localhost:5000/${event && event.image}`} width={500} height={500} alt="Event" />
//         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//           <h2 className="text-4xl font-bold text-red-500 mb-4" style={{ color: '#0E4D4F' }}>{event && event.title}</h2>
//           <p className="text-base text-E0EFF6" style={{ color: '#0E4D4F' }}>
//             {event && event.description}
//           </p>
//           {event && event.Artisans && (
//             <>
//               {/* Hide the button if the artist's status is accepted
//               {artistStatus === "accepted" && (
//                 <p>You have already joined this event.</p>
//               )}

//               {/* Display a message if the request has been sent */}
//               {/* {requestSent && artistStatus === "pending" && (
//                 <p>Your participation request is in progress.</p>
//               )} */}

//               {/* Display the "Join Us" button if the artist's ID is not in the Artisans array */}
//               {/* {!event.Artisans.some(request => request.artist === user?._id) && (
//                 <button onClick={handleJoinEvent} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//                   Join Us
//                 </button>
//               )} */}
//               {/* {
//                 !artistStatus?(
//                   <button onClick={handleJoinEvent} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//                   Join Us
//                 </button>
//                 ):(
//                   <p> {artistStatus}</p>
//                 )
//               }
//               {
//                 artistStatus === "pending" ? <h1>Pending</h1> :
//                   artistStatus === "accepted" ? <h1>Accepted</h1> :
//                     <h1>Button</h1>
//               }

//             </>
//           )} */}
//           {
//   !artistStatus ? (
//     <button onClick={handleJoinEvent} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//       Join Us
//     </button>
//   ) : (
//     <p> {artistStatus}</p>
//   )
// }
// {/* {
//   artistStatus === "pending" ? <h1>Pending</h1> :
//     artistStatus === "accepted" ? <h1>Accepted</h1> :
//       <h1>Button</h1>
// }  */}




//           <div className="flex flex-row justify-start mt-8 space-x-36">
//             {TAB_DATA.map((tabItem) => (
//               <TabButton
//                 key={tabItem.id}
//                 selectTab={() => handleTabChange(tabItem.id)}
//                 active={tab === tabItem.id}
//               >
//                 {tabItem.title}
//               </TabButton>
//             ))}
//           </div>
//           <div className="mt-8">
//             {event && TAB_DATA.find((t) => t.id === tab).content}
//           </div>
          
//       </div>
//     </section>
//   );
// };

// export default Eventdetails;
import React, { useState, useEffect, useContext } from "react";
import TabButton from "../../components/tabbutton";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { UserContext } from "../../UserContext/UserContext";
import './singlepageevent.css'

const Eventdetails = () => {
  const [event, setEvent] = useState(null);
  const [tab, setTab] = useState('location');
  const [artistStatus, setArtistStatus] = useState(null); // State to store artist's participation status
  const { user } = useContext(UserContext);

  // Retrieve event ID from URL parameter
  const { eventId } = useParams();

  useEffect(() => {
    // Fetch event details
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/events/${eventId}`);
        if (response.data) {
          setEvent(response.data);
        } else {
          console.log("Event not found")
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEvent();

    // Check if the current user is an artist for this event
    if (event && user) {
      const artistRequest = event.Artisans.find(request => request.artist.userId === user._id);
      if (artistRequest) {
        setArtistStatus(artistRequest.status);
      }
    }
  }, [eventId, event, user]);

  const handleJoinEvent = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/events/request`, {
        eventId: eventId
      });
      console.log(response.data); // Log the response from the backend
      setArtistStatus("pending"); // Update artist status to pending
    } catch (error) {
      console.error('Error joining event:', error);
    }
  };

  const TAB_DATA = [
    {
      title: "Location",
      id: "location",
      content: (
        <ul className="list-disc pl-2 text-E0EFF6" style={{ color: '#0E4D4F' }}>
          <li>Location: {event && event.location}</li>
        </ul>
      ),
    },
    {
      title: "Time",
      id: "date_time",
      content: (
        <ul className="list-disc pl-2 text-E0EFF6" style={{ color: '#0E4D4F' }}>
          <li>Start Time: {event && event.start_time}</li>
          <li>End Time: {event && event.end_time}</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-28" style={{ backgroundColor: '#E0EFF6' ,marginTop:'87px'}}>
        <img src={`http://localhost:5000/${event && event.image}`} width={500} height={500} alt="Event" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-red-500 mb-4" style={{ color: '#0E4D4F' }}>{event && event.title}</h2>
          <p className="text-base text-E0EFF6" style={{ color: '#0E4D4F',fontSize:'20px' }}>
            {event && event.description}
          </p>
          {/* Display different content based on artistStatus */}
          {!artistStatus && (
            <button onClick={handleJoinEvent}  className='btn'>
              Join Us
            </button>
          )}
          {artistStatus === "pending" && (
            <p style={{ color: '#0E4D4F', border: '2px solid gray',marginTop:'45px', marginBottom:'45px', fontWeight:'bold', width:'50%', borderRadius: '2px', padding: '5px' }}>
  Your participation request is in progress.
</p>
          )}
          {artistStatus === "accepted" && (
            <p style={{ color: '#0E4D4F', border: '2px solid gray',marginTop:'45px', marginBottom:'45px', fontWeight:'bold', width:'50%', borderRadius: '2px', padding: '5px' }} >You have already joined this event.</p>
          )}
          <div className="flex flex-row justify-start mt-8 space-x-36">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => setTab(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {event && TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eventdetails;
