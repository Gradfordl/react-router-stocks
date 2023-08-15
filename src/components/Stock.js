import { useParams } from "react-router-dom";
import stocks from "../data";

export default function Stock() {
  const { symbol } = useParams();

  try {
    const stock = stocks.find((stock) => stock.symbol === symbol);

    if (!stock) throw new Error("Stock doesn't exist");
    return (
      <div>
        <h1>{stock.name}</h1>
        <h1>({stock.symbol})</h1>
        <h1>PRICE: {stock.lastPrice}</h1>
        <h1>CHANGE: {stock.change}</h1>
        <h1>HIGH: {stock.high}</h1>
        <h1>LOW: {stock.low}</h1>
        <h1>{stock.open}</h1>
      </div>
    );
  } catch (error) {
    return <h2>{error.message}</h2>;
  }
}
