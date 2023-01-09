import React from 'react'

export const PostFunction = (props) => {
    //const myName = 'Kwanticha Phanpetch';//แทรกข้อมูลจากตัวแปลมาโชว์
    //let score = 19+8;
    return (
          <div>
                <p>
                   Text  <b><i> : {props.content}</i></b>
                </p>
                <p>
                  Post by <b> <i>:{props.name}</i></b>
                </p>
            </div>
    )
}
