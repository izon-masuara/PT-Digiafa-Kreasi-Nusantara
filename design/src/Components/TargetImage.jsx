import { useState } from "react"
import { useDrop } from "react-dnd"
import { NativeTypes } from "react-dnd-html5-backend"

export default function TargetImage() {
    const [file,setFile] = useState()
    const [ ,drop] = useDrop(() => ({
        accept: [NativeTypes.FILE],
        drop(item) {
            const fileType = item.files[0].type.split('/')
            if(fileType[0] == 'image'){
                
            }
            // console.log(URL.createObjectURL(item.files[0]))
        }
    }))
    return (
        <div className="w-full h-full bg-gray-100" ref={drop} >Drag</div>
    )
}