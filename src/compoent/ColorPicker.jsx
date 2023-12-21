import React from 'react';
const ColorPicker = ({ selectedColor , onSelectColor })=>{
    const colors = [
        '#ffffff',
        '#ffcccb',
        '#ffd700',
        '#98fb98',
        '#dda0dd',
        '#00ced1',
        '#7fffd4',
        '#ff6347',
        '#f0e68c',
        '#dda0dd',
        '#ffb6c1',
        '#8a2be2',
        '#b0c4de',
        '#20b2aa',
        '#4682b4',
        
      ];
 return(
    <div className="color-picker">
        {
            colors.map((color)=>(
                <div
                  key={color}
                  className={`color-option ${selectedColor===color ? 'selected' : ''}`}
                  style={{width:"30px",height:"30px",backgroundColor:color,border:"1px solid black",borderRadius:"50%",margin:"2px"  }}          
                  onClick={()=>onSelectColor(color)}
                >

                </div>
            ))
        }
    </div>
 )
}
export default ColorPicker;