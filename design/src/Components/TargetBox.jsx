import { useState } from "react"
import { useDrop } from "react-dnd"

export default function TargetBox({ img }) {
    const [color, setColor] = useState('red')
    const [, drop] = useDrop(() => ({
        accept: 'box',
        drop(item) {
            setColor(item.name)
        }
    }))
    return (
        <img src={img} alt="" ref={drop} className={`bg-${color}-200 hover:border-2 border-black  justify-center flex`} data-testid="dustbin" />
    )
}