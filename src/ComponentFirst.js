import { useState } from "react";
import ComponentSecond from "./ComponentSecond";

export default function ComponentFirst({count, handleAddData}){


        console.count("componentFirst");



        const [item, setItem] = useState([]);

        // const handleAddItem = useCallback((obj) => setItem(prevItem => [{...obj, count}]),[count])

        const handleAddItem = (obj) => {

            setItem(prevItem => [{...obj, count}])
        }

        const handleShow = () => handleAddData(item);


        return(<>
                    <ComponentSecond handleAddItem = {handleAddItem} />
                    <button onClick={handleShow}>lihat item</button>
                </>)



}