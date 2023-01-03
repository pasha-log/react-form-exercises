import React, {useState} from "react"; 

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        color: "", 
        width: "",
        height: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData})
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Box Color:{formData.color}</label>
            <input 
                id="color"
                type="text"
                // type="color"
                name="color"
                placeholder="Box Color"
                value={formData.color}
                onChange={handleChange}
            />
            <label htmlFor="width">Width:{formData.width}</label>
            <input 
                id="width"
                type="text" 
                name="width"
                placeholder="Width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height:{formData.height}</label>
            <input 
                id="height"
                type="text" 
                name="height"
                placeholder="Height"
                value={formData.height}
                onChange={handleChange}
            />
           <button onClick={handleSubmit}>Add Box</button>
        </form>
    )
}

export default NewBoxForm;