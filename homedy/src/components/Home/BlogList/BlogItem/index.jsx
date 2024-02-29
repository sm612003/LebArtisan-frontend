// import React from 'react';
// import { Link } from 'react-router-dom';
// import Chip from '../../../../common/Chip/index';
// import './styles.css';

// const BlogItem = ({
//   blog: {
//     description,
//     title,
//     createdAt,
//     authorName,
//     authorAvatar,
//     cover,
//     category,
//     id,
//   },
// }) => {
//   return (
//     <div className='blogItem-wrap'>
//       <img className='blogItem-cover' src={cover} alt='cover' />
//       <Chip label={category} />
//       <h3>{title}</h3>
//       <p className='blogItem-desc'>{description}</p>
//       <footer>
//         <div className='blogItem-author'>
//           <img src={authorAvatar} alt='avatar' />
//           <div>
//             <h6>{authorName}</h6>
//             <p>{createdAt}</p>
//           </div>
//         </div>
//         <Link className='blogItem-link' to={`/blog/${id}`}>
//           ➝
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default BlogItem;
import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../../common/Chip/index';
import './styles.css';

const WorkshopItem = ({
  workshop: {
    title,
    description,
    artistName,
    artistImage,
    image,
    _id, // Add _id
    categoryTitle,
  },
}) => {
  return (
    <div className='blogItem-wrap' >
      <img className='blogItem-cover' src={`${process.env.REACT_APP_BACKEND}/${image}`} alt='workshop cover' />
      <Chip label={categoryTitle} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={`${process.env.REACT_APP_BACKEND}/${artistImage}`} alt='artist avatar' />
          <div>
            <h6>{artistName}</h6>
          </div>
        </div>
    {/* Use Link component with workshop ID */}
    <Link className='blogItem-link' to={`/workshop/${_id}`}>
          ➝
        </Link>

      </footer>
    </div>
  );
};

export default WorkshopItem;
