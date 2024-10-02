import "./App.css";
import {useState, useMemo} from "react";
import {getCatData, ICatData, getFoodData, IFoodCategory} from "../api/getData"

function App() {

  const [catData, setCatData] = useState<ICatData[]>();
  const [foodData, setFoodData] = useState<IFoodCategory[]>();
  
  useMemo(()=>{
    getCatData({setCatData: (catData: ICatData[])=>setCatData(catData)});
    getFoodData({setFoodData: (foodData: IFoodCategory[])=>setFoodData(foodData)});
  },[]);

  return(<main></main>);
}

export default App;
