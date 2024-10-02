import "./App.css";
import {useState, useMemo} from "react";
import {getCatData, ICatData} from "../api/catData"

function App() {

  const [catData, setCatData] = useState<ICatData[]>();
  
  useMemo(()=>{
    getCatData({setCatData: (catData: ICatData[])=>setCatData(catData)});
  },[]);

  return(<main></main>);
}

export default App;
