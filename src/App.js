import { useState } from "react";
import './App.css';
import ComponentFirst from "./ComponentFirst";



export default function App(){


        console.count("app");


        let count = 1

        const [data, setData] = useState([]);

        const handleAddData = (obj) => setData([...data, ...obj])




        return(<>
                <h1>{count}</h1>
                <ComponentFirst count = {count} handleAddData = {handleAddData} />
                {data.map(item => <h1 key={item.count}>{item.count}. {item.name}</h1>)}
               </>)

}