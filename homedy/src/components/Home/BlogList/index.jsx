// import React from 'react';
// import BlogItem from './BlogItem';
// import './styles.css';

// const BlogList = ({ blogs }) => {
//   return (
//     <div className='blogList-wrap'>
//       {blogs.map((blog) => (
//         <BlogItem blog={blog} />
//       ))}
//     </div>
//   );
// };

// export default BlogList;


import React from 'react';
import WorkshopItem from './BlogItem';
import './styles.css';

const WorkshopList = ({ workshops }) => {
  return (
    <div className='blogList-wrap' style={{marginBottom:'15%'}}>
      {workshops.map((workshop) => (
        <WorkshopItem workshop={workshop} key={workshop._id} /> 
      ))}
    </div>
  );
};



export default WorkshopList;
