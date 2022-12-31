import { useState } from "react";
import { DndProvider, useDrag, } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Color from "../Components/Color";
import TargetBox from "../Components/TargetBox";
import TargetImage from "../Components/TargetImage";
import TextComponent from "../Components/Text";

export default function DesignPage() {
    const [image, setImage] = useState('')
    const [text, setText] = useState('')
    const [width, setWidth] = useState(10)
    const [height, setHeight] = useState(6)
    const [boxText, setBoxtText] = useState({
        text: text,
        width: width,
        height: height
    })
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="h-screen">
                    <div className="bg-gray-50 h-full w-screen flex p-10">
                        <div className="relative bg-gray-200 w-full h-full p-10">
                            <TargetBox img={image} />
                            <TextComponent boxText={boxText} />
                        </div>
                        <div className="bg-gray-400 xl:w-96 w-60 h-full p-2">
                            <div className="w-full bg-white p-2 cursor-pointer">
                                <Color name="sky" />
                                <Color name="yellow" />
                                <Color name="green" />
                                <Color name="purple" />
                                <Color name="indigo" />
                                <Color name="red" />
                                <Color name="white" />
                            </div>
                            <div className="w-full h-40 bg-white mt-10">
                                <TargetImage setImage={setImage} />
                            </div>
                            <div className="w-full h-40 bg-white mt-10 p-2">
                                <input className="w-full border-2 border-black" type="text" value={text} placeholder="text here" onChange={(e) => setText(`${e.target.value}`)} />
                                <div className="pt-4 flex justify-center">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex">
                                            <p>X &nbsp; </p>
                                            <input type="number" min={0} className="border-2 border-black w-10 h-6" onChange={(e) => setWidth(e.target.value)} />
                                        </div>
                                        <div className="flex">
                                            <p>Y &nbsp;</p>
                                            <input type="number" min={0} className="border-2 border-black w-10 h-6" onChange={(e) => setHeight(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 w-full flex justify-center">
                                    <button onClick={() => setBoxtText({ text: text, width: width, height: height })} className="border-black border-2 p-1 rounded-md px-4 hover:bg-orange-500 hover:font-semibold bg-orange-200">Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DndProvider>
        </>
    )
}