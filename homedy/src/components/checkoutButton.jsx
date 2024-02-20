// import React from 'react';
// import { useState } from 'react';
// import { Button } from '../ui/button';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import Checkout from './Checkout';

// const CheckoutButton = ({ event }) => {
//   const [user, setUser] = useState(null); // Assuming user state is managed in parent component
//   const [userId, setUserId] = useState(null); // Assuming userId state is managed in parent component
//   const hasEventFinished = new Date(event.endDateTime) < new Date();

//   return (
//     <div className="flex items-center gap-3">
//       {hasEventFinished ? (
//         <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
//       ) : (
//         <>
//           {user ? (
//             <Checkout event={event} userId={userId} />
//           ) : (
//             <Button as="button" className="button rounded-full" size="lg">
//               <Link to="/sign-in">Get Tickets</Link>
//             </Button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default CheckoutButton;
