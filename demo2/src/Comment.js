import React from 'react'//rafc 
import "./Comment.css"

export default Comment = (props) => {//props การเชื่อม props
    return (
        <div className ="dialogbox">
            <div className ="body">
                 <span className="tip tip-up"></span>
                 <div className ="message">
                     <span>
                         <b>{props.userId}</b> = {props.message}
                     </span>

                 </div>


            </div>
            
        </div>
    )
}//props ส่งต่อให้ได้แค่ลูก