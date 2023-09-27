import React from "react";

function Section(props) {
  return (
    <div class="min-w-screen-xl py-10">
      <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
            {props.title}
          </h1>
          <p class="text-sm leading-4 font-medium text-[#089dc2] sm:text-slate-500 dark:sm:text-slate-400">
            {props.subtitle}
          </p>
        </div>

        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button
            type="button"
            class="bg-[#089dc2] text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            Register
          </button>
        </div>
        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          {props.info}
        </p>
      </div>
    </div>
  );
}

export default Section;

// import React from "react";

// function Section(props) {
//   const isLeft = props.isLeft; // Add a prop to determine if the section is on the left

//   // Define CSS classes based on the position
//   const sectionClasses = isLeft
//     ? "col-start-1 row-start-1"
//     : "col-start-2 row-start-1";

//   const buttonClasses = isLeft
//     ? "col-start-1 row-start-3 self-center mt-4 sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"
//     : "col-start-1 row-start-3 self-center mt-4 sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-2 lg:row-start-3 lg:row-end-4";

//   return (
//     <div>
//       <div
//         className={`max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2`}
//       >
//         <div
//           className={`relative p-3 flex flex-col-reverse rounded-lg bg-gradient-to-t ${
//             isLeft ? "from-black/75 via-black/0" : "from-black/0 via-black/75"
//           } sm:bg-none ${
//             isLeft ? "sm:row-start-2" : "sm:row-start-1"
//           } sm:p-0 lg:row-start-1`}
//         >
//           <h1
//             className={`mt-1 text-lg font-semibold ${
//               isLeft ? "text-white" : "text-[#089dc2]"
//             } sm:text-slate-900 md:text-2xl dark:sm:text-white`}
//           >
//             {props.title}
//           </h1>
//           <p
//             className={`text-sm leading-4 font-medium ${
//               isLeft ? "text-[#089dc2]" : "text-slate-500"
//             } dark:sm:text-slate-400`}
//           >
//             {props.subtitle}
//           </p>
//         </div>

//         <div className={buttonClasses}>
//           <button
//             type="button"
//             className={`bg-[#089dc2] text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg`}
//           >
//             Register
//           </button>
//         </div>
//         <p
//           className={`mt-4 text-sm leading-6 ${
//             isLeft ? "col-start-1 sm:col-span-2" : "lg:col-span-1"
//           } dark:text-slate-400`}
//         >
//           {props.info}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Section;
