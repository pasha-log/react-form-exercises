import React from 'react';

const Box = ({ id, color, width, height, deleteBox }) => {
    const styles = {
        backgroundColor: color,
        width: width,
		height: height,
    }
	return (
			<ul>
				<li>
                    <div 
                        style={styles}
                        id={id} 
                        // key={id}
                        >
					</div>
					<button onClick={() => deleteBox(id)}>X</button>
				</li>
			</ul>
	);
};

export default Box;
