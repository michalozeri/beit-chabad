import { useEffect } from "react";
import { DonatorPrev } from "./DonatorPrev";
import React from "react";
import Carousel from "react-material-ui-carousel";

export function DonatorsList({ donators }) {

  return (
    <section>
      {donators.length && (
        <Carousel duration="3000" interval="7000" indicators={false} style={{height:"100vh"}}>
          {donators.map((donator) => (
            <DonatorPrev key={donator.id} donator={donator} />
          ))}
        </Carousel>
      )}
    </section>
  );
}

// export function Donators({donators}) {

//     useEffect(()=>{
// console.log(donators);
//     },[])
//   return (
//     <section>
//       {donators.length && (
//         <div>
//           {donators.map((donator) => {
//             return (
//               <div key={donator.id}>
//                 <p>{donator.fullname}</p>
//                 <p>{donator.txt1}</p>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </section>
//   );
// }
