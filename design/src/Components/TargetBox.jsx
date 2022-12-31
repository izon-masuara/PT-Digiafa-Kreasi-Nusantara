import { useState } from "react"
import { useDrop } from "react-dnd"

export default function TargetBox({img}) {
    const [color, setColor] = useState('red')
    const [ ,drop] = useDrop(() => ({
        accept: 'box',
        drop(item) {
            setColor(item.name)
        }
    }))
    return (
        <div ref={drop} className={`bg-${color}-200 border-2 border-black w-full h-full justify-center flex`} data-testid="dustbin">
            {img}
        </div>
    )
}