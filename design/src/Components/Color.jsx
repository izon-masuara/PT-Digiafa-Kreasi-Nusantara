import { useDrag } from "react-dnd"

export default function Color({ name }) {
    const [ , drag] = useDrag(() => ({
        type: 'box',
        item: { name }
    }))
    return (
        <div ref={drag} className={`bg-${name}-200 border-2 border-black text-center my-2`} data-testid={`box`}>
            {name}
        </div>
    )
}