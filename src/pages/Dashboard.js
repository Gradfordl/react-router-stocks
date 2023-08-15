import { Link } from "react-router-dom";
import stocks from "../data"

export default function Prices(props){
    return (
        <div className="stocks">
          {stocks.map((stock) => {
            const { name, symbol } = stock;
            return (
              <Link to={`/Stock/${symbol}`} key = {stock.symbol}>
                <h2>{name}</h2>
              </Link>
            );
          })}
        </div>
      );
    };