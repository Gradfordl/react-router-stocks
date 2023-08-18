import { useParams } from "react-router-dom";
import stocks from "../data";

export default function Stock() {
  const { symbol } = useParams();

  try {
    const stock = stocks.find((stock) => stock.symbol === symbol);

    if (!stock) throw new Error("Stock doesn't exist");
    return (
      <div> 
        <h1>STOCK INFO: </h1>
        <h2>{stock.name} ({stock.symbol})</h2>
        <h3>Price: {stock.lastPrice}</h3>
        <p>Change: {stock.change}</p>
        <p>High: {stock.high}</p>
        <p>Low: {stock.low}</p>
        <p>{stock.open}</p>
      </div>
    );
  } catch (error) {
    return <h2>{error.message}</h2>;
  }
}
