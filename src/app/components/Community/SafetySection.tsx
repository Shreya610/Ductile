// import React, { useState } from "react";
// import { HiOutlineVideoCamera } from "react-icons/hi";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { section } from "../../utils/interface/EngineerPage/section";

// interface Iprops {
//   section: section & { image?: { src: string; caption: string } };
// }

// const SafetySection: React.FC<Iprops> = (props) => {
//   const { section } = props;
//   const [showSection, setShowSection] = useState<boolean>(false);

//   return (
//     <>
//       <div className="w-full mx-auto">
//         <div
//           className="flex flex-row  border-b border-slate-300  overflow-hidden transition-[0.3s]  justify-between p-4 "
//           onClick={() => setShowSection(!showSection)}
//         >
//           <h2 className="text-[0.7rem] md:text-[0.9rem] font-plus-jakarta-sans  font-semibold text-slate-700">
//             {section?.title}
//           </h2>

//           {showSection ? (
//             <IoIosArrowDown className="text-slate-1000" />
//           ) : (
//             <IoIosArrowUp className="text-slate-700" />
//           )}
//         </div>

//         {section?.data &&
//           section?.data?.map((lecture, idx) => (
//             <div
//               className={` flex z-10  overflow-hidden  w-full  relative scale-y-0   transition-all origin-top duration-700 ease-in-out  ${
//                 showSection ? " scale-y-100  " : " scale-y-0  "
//               }`}
//               key={idx}
//             >
//               {showSection && (
//                 <div className="p-4 text-sm font-plus-jakarta-sans leading-[22px]  text-slate-600 ">
//                   {lecture}
//                 </div>
//               )}
//             </div>
//           ))}

//         {/* Display Image and Caption */}
//         {showSection && section?.image && (
//           <div className="p-4">
//             <img
//               src={section.image.src}
//               alt={section.image.caption}
//               className="w-full  mb-2"
//             />
//             <p className="text-sm font-plus-jakarta-sans text-slate-600">
//               {section.image.caption}
//             </p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SafetySection;
