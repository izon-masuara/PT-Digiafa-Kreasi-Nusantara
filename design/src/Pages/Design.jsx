import { useState } from "react";
import { DndProvider, } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Color from "../Components/Color";
import TargetBox from "../Components/TargetBox";
import TargetImage from "../Components/TargetImage";

export default function DesignPage() {
    const [image, setImage] = useState(
        <img className="h-full w-full" src={require('../updateclothes.png')} alt="" />
    )
    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className="bg-gray-50 h-screen w-screen flex p-10">
                    <div className="bg-gray-200 w-full h-full p-10">
                        <TargetBox img={image} />
                    </div>
                    <div className="bg-gray-400 xl:w-96 w-60 h-full p-2">
                        <div className="w-full h-60 bg-white p-2">
                            <Color name="sky" />
                            <Color name="yellow" />
                            <Color name="green" />
                            <Color name="purple" />
                            <Color name="indigo" />
                            <Color name="red" />
                        </div>
                        <div className="w-full h-40 bg-white mt-10">
                            <TargetImage />
                        </div>
                    </div>
                </div>
            </DndProvider>
        </>
    )
}