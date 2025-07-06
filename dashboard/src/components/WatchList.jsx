 import React ,{useState} from "react";
import  { useContext } from "react"; // ✅ import useContext
import GeneralContext from "./GeneralContext"; // ✅ import your context
import { Tooltip,Grow } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { watchlist } from "../data/Data";
import { DoughnutChart } from "./DoughnutChart";

const labels=watchlist.map((subArray)=>subArray["name"]);

const WatchList = () => {




const data={
labels,
datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}


// const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  // datasets: [
  //   {
  //     label: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(54, 162, 235, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)',
  //       'rgba(255, 159, 64, 0.2)',
  //     ],
  //     borderColor: [
  //       'rgba(255, 99, 132, 1)',
  //       'rgba(54, 162, 235, 1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)',
  //       'rgba(255, 159, 64, 1)',
  //     ],
  //     borderWidth: 1,
  //   },
  // ],
// };



  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}/50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return(
        <WatchListItem stock={stock} key={index}/>
      )
        })}
      </ul>
      <DoughnutChart data={data}/>
    </div>
  );
};

export default WatchList;

const WatchListItem=({stock})=>{
const[showWatchlistActions,setshowWatchlistActions]=useState(false);
const handleMouseEnter=(e)=>{
  setshowWatchlistActions(true);
}
const handleMouseLeave=(e)=>{
  setshowWatchlistActions(false);
}
return(
<li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <div className="item">
    <p className={stock.isDown ? "down":"up"}>{stock.name}</p>
    <div className="itemInfo">
      <span className="percent">{stock.percent}</span>
      {stock.isDown ?(
        <ArrowDownwardIcon className="down"/> ):
       <ArrowUpwardIcon className="up"/> 
      }
      <span className="price">{stock.price} </span>
    </div>
  </div>
{showWatchlistActions &&  <WatchListAction uid={stock.name} />  }
</li>
);
}


const WatchListAction=({uid})=>{
   const { openBuyWindow,openSellWindow } = useContext(GeneralContext); // ✅ get function
  return(
    <span className="actions"> 
    <span>
      <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
       <button className="buy" onClick={() => openBuyWindow(uid)}>Buy</button> {/* ✅ working */}
      </Tooltip>
        <Tooltip title="sell" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell" onClick={()=>openSellWindow(uid)} >sell</button>
      </Tooltip>
        <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
        <button className="action"><AnalyticsIcon className="icon"/></button>
      </Tooltip>
        <Tooltip title="more" placement="top" arrow TransitionComponent={Grow}>
        <button className="action"><MoreHorizIcon className="icon" /></button>
      </Tooltip>
    </span>
    </span>
  )
}