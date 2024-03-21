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
//       <ul className="pagination d-flex justify-content-center gap-3">
//         <li
//           className={`page-item ${currentPage === 1 && "disabled"}`}
//           onClick={() => setCurrentPage((prev) => prev - 1)}
//           style={{ cursor: "pointer" }}
//         >
//           <span className="page-link">
//             <i className="fa fa-angle-left"></i>
//           </span>
//         </li>

//         {pageNumbers.map((i) => (
//           <li
//             className={`page-item ${currentPage === i && "active"}`}
//             style={{ cursor: "pointer" }}>
//             <span className="page-link" onClick={() => setCurrentPage(i)}>
//               {i}
//             </span>
//           </li>
//         ))}
//         <li
//           className={`page-item ${currentPage === totalPages && "disabled"}`}
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//           style={{ cursor: "pointer" }}
//         >
//           <span className="page-link">
//             {" "}
//             <i className="fa fa-angle-right"></i>
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
        <ul class="pagination d-flex  align-items-center justify-content-center " style={{gap:"43px"}}>
          <li class="">
            <a class="page-link" href="#" aria-label="Previous">
              <img src={leftinacivepag} alt="" />
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="">
            <a class="page-link" href="#" aria-label="Next">
              <img src={rightacivepag} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination