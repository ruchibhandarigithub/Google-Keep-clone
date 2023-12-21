import React from 'react';
const ColorPicker = ({ selectedColor , onSelectColor })=>{
 const colors = ['#ffffff','#ffcccb','#ffd700','#98fb98','#ddaOdd'];
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