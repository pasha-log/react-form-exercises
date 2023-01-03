import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuid(), color: '#00FFFF', width: 100, height: 100}, 
        {id: uuid(), color: '#7FFFD4', width: 50, height: 100}
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    }
    const deleteBox = (id) => {
        setBoxes(boxes => 
            [...boxes.filter(box => box.id !== id)]
        )
    }
    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({id, color, width, height}) => <Box id={id} key={id} color={color} width={width} height={height} deleteBox={deleteBox} />)}
            </div>

        </div>
    )
}

export default BoxList;

