import { useDrop } from "react-dnd"
import { NativeTypes } from "react-dnd-html5-backend"

export default function TargetImage({setImage}) {
    const [ ,drop] = useDrop(() => ({
        accept: [NativeTypes.FILE],
        drop(item) {
            const fileType = item.files[0].type.split('/')
            if(fileType[0] === 'image'){
                setImage(URL.createObjectURL(item.files[0]))
            }
        }
    }))
    return (
        <div className="w-full h-full bg-gray-100 text-center pt-10 border-2 border-black" ref={drop} >Drag you image here <br /> Note : svg,png,jpg</div>
    )
}