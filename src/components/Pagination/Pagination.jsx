/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */


// const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   console.log(currentPage, "currentPage");

//   return (
//     <nav aria-label="">
//       <ul classNameName="pagination d-flex justify-content-center gap-3">
//         <li
//           classNameName={`page-item ${currentPage === 1 && "disabled"}`}
//           onClick={() => setCurrentPage((prev) => prev - 1)}
//           style={{ cursor: "pointer" }}
//         >
//           <span classNameName="page-link p-0">
//             <i classNameName="fa fa-angle-left"></i>
//           </span>
//         </li>

//         {pageNumbers.map((i) => (
//           <li
//             classNameName={`page-item ${currentPage === i && "active"}`}
//             style={{ cursor: "pointer" }}>
//             <span classNameName="page-link p-0" onClick={() => setCurrentPage(i)}>
//               {i}
//             </span>
//           </li>
//         ))}
//         <li
//           classNameName={`page-item ${currentPage === totalPages && "disabled"}`}
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//           style={{ cursor: "pointer" }}
//         >
//           <span classNameName="page-link p-0">
//             {" "}
//             <i classNameName="fa fa-angle-right"></i>
//           </span>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;


import React from 'react'
import leftinacivepag from '../../assets/leftinacivepag.png';
import rightacivepag from '../../assets/rightacivepag.png';

const Pagination = () => {

  return (
    <div>
      <nav aria-label="Page navigation example " className='news_pagination'>
        <ul className="pagination mb-0 d-flex  align-items-center justify-content-center " style={{ gap: "43px" }}>
          <li className="">
            <a className="page-link p-0" href="#" aria-label="Previous">
              <img src={leftinacivepag} alt="" />
            </a>
          </li>
          <li className="page-item active"><a className="page-link p-0" href="#">1</a></li>
          <li className="page-item"><a className="page-link p-0" href="#">2</a></li>
          <li className="page-item"><a className="page-link p-0" href="#">3</a></li>
          <li className="page-item"><a className="page-link p-0" href="#">4</a></li>
          <li className="">
            <a className="page-link p-0" href="#" aria-label="Next">
              <img src={rightacivepag} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination