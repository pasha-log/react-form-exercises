import React from 'react';

const Box = ({ id, color, width, height, deleteBox }) => {
    const styles = {
        backgroundColor: color,
        width: parseInt(width),
		height: parseInt(height),
    }
	return (
			<ul>
				<li>
                    <div 
                        style={styles}
                        id={id} 
                        key={id}
                        data-testid={'tester'}                        >
					</div>
					<button onClick={() => deleteBox(id)}>X</button>
				</li>
			</ul>
	);
};

export default Box;
