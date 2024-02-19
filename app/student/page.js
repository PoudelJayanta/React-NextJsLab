'use client'

import React, { useState } from 'react'
import { Button } from 'reactstrap'

function Student() {
    const [val, setVal] = useState(6);

    const handleClick = () =>{
        setVal(val+1);
    }
    return (
        <div>
            <div >
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'5px'}}>
                    <Button
                        color="primary"
                        onClick={()=>setVal(val+1)}
        
                    >
                        +
                    </Button>
                </div>
                <div style={{textAlign:'center'}}>
                    Value: {val}
                </div>
            </div>
        </div>
    )
}

export default Student
