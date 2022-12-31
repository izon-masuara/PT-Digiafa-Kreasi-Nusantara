import { useState } from "react"

export default function TextComponent({boxText}) {
    const [posisition,setPosisition] = useState({x:300,y:300})

    const dragging = (e) => {
        const newPosisition = {x:e.clientX - 65,y:e.clientY - 50}
        setPosisition(newPosisition)
    }
    return (
        <div onDrag={dragging} className={`w-[${boxText.width}px] h-[${boxText.height}px] hover:border-2 border-black overflow-hidden cursor-pointer absolute top-[${posisition.y}px] bottom-[${posisition.y}px] left-[${posisition.x}px] right-[${posisition.x}px]`}>
            {boxText.text}
        </div>
    )
}