// import { useState, useEffect } from "react";
// //useParams is related to parameters in URL bar ex: "google.com/:parameter"
// import { useParams } from "react-router-dom";

// export default function Stocks(props) {
//   const apiKey = process.env.REACT_APP_API_KEY;
//   console.log(apiKey);

//   // Using apiKey vari to create our URL
//   const url = `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${apiKey}`;
//   //state to hold the stock data
//   const [stock, setStock] = useState(null);

//   const getStock = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setStock(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // useEffect to run getStock when component mounts
//   useEffect(() => {
//     getStock();
//   }, []);

//   return stock
// }



// import { Link } from "react-router-dom";
// import Stocks from "./Stocks"
// import { useParams } from "react-router-dom";

// export default function Dashboard(props){
//     //Grabbing the currency symbol from the URL parameters
//   const params = useParams();
//   console.log(params);
//   const symbol = params.symbol;
//     return (
//         <div className="stocks">

//           {Stocks.map((stock) => {
//             const { name, symbol } = stock;
//             return (
//               <Link to={`/Stock/${symbol}`} key={stock.symbol}>
//                 <h2>{name}</h2>
//               </Link>
//             );
//           })}
//         </div>
//       );
//     }; 
