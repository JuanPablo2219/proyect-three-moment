



// import React, { useState } from 'react';

// const BotonesComponent = () => {
//   // Definir tres estados para los botones
//   const [estadoBoton1, setEstadoBoton1] = useState(false);
//   const [estadoBoton2, setEstadoBoton2] = useState(false);
//   const [estadoBoton3, setEstadoBoton3] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setEstadoBoton1(!estadoBoton1)}>
//         {estadoBoton1 ? 'Botón 1 ON' : 'Botón 1 OFF'}
//       </button>

//       <button onClick={() => setEstadoBoton2(!estadoBoton2)}>
//         {estadoBoton2 ? 'Botón 2 ON' : 'Botón 2 OFF'}
//       </button>

//       <button onClick={() => setEstadoBoton3(!estadoBoton3)}>
//         {estadoBoton3 ? 'Botón 3 ON' : 'Botón 3 OFF'}
//       </button>
//     </div>
//   );
// };

// export default BotonesComponent;





















































// function OrdenApp () {
//   const [order, setOrder] = useState('firste order')

//   setTimeout(()=> {
//     setOrder('adding')
//   }, 2000)

//   return <h1>{order}</h1>
// }




// export default function EmojiCounter() {
//   const [emojiCounter, setEmojiCounter] = useState("🐶");

//   return (
//     <>
//       <h1>{emojiCounter}</h1>
//       <button onClick={function () {
//         setEmojiCounter(function (prevEmoji) {
//           return prevEmoji + "🐶🐶";
//         });
//         setEmojiCounter(function (prevEmoji) {
//           return prevEmoji + "🐶";
//         });
//         setEmojiCounter(function (prevEmoji) {
//           return prevEmoji + "🐶🐶🐶";
//         });
//       }}>add 3 smiles</button>
//     </>
//   );
// }







































// import { useState } from "react";

// function SpookyCounter() {
//     const [isVampiro, setIsVampiro] = useState(false);

//     return (
//         <div>
//             <p>Eres {isVampiro ? 'un vampiro' : 'un Humano'}</p>
//             <button onClick={() => setIsVampiro(!isVampiro)}>Cambiar Forma</button>
//         </div>
//     )
// }
// export default SpookyCounter



























































// // // App.tsx
// // import Flag from './Flag';

// // export default function App() {
// //   const handleFlagClick = (color: string) => {
// //     alert(`Color: ${color}, País: Ecuador`);
// //   };

// //   return (
// //     <div className='firstContainer'>
// //       <Flag onClick={handleFlagClick} />
// //     </div>
// //   );
// // }
