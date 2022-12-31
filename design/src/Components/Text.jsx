import { useState } from "react"
import { useDrop } from "react-dnd"

export default function TextComponent({boxText}) {
    const [color,setColor] = useState('')
    const [,drop] = useDrop(() => ({
        accept : 'box',
        drop:(item) => {
            setColor(item.name)
        }
    }))
    const [posisition,setPosisition] = useState({x:300,y:300})

    const dragging = (e) => {
        const newPosisition = {x:e.clientX - 65,y:e.clientY - 50}
        setPosisition(newPosisition)
    }
    return (
        <div ref={drop} onDrag={dragging} className={`w-[${boxText.width}px] h-[${boxText.height}px] text-[${boxText.fontSize}px] text-${color}-200 hover:border-2 border-black overflow-hidden cursor-pointer absolute top-[${posisition.y}px] bottom-[${posisition.y}px] left-[${posisition.x}px] right-[${posisition.x}px]`}>
            {boxText.text}
        </div>
    )
}