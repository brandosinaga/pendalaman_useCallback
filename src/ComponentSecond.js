import { memo } from "react";

const ComponentSecond = memo(function ComponentSecond({handleAddItem}){


    console.count("componentSecond")


    

    const handleSubmit = (e) => {

        e.preventDefault();
        
        const formData = new FormData(e.target);

        const obj = {...Object.fromEntries(formData)};

        handleAddItem(obj)



    }



    return(<form onSubmit={handleSubmit}>

                        <label>Name : 
                            <input name="name" />
                        </label>

                        <button type="submit">submit</button>
                </form>)

})



export default ComponentSecond;