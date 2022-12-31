import { useEffect } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const playRef = useRef()
    useEffect(() => {
        playRef.current.volume = 20/100
    }, [])
    return (
        <div className="container">
            <div className="bg-gray-500 w-screen h-screen grid place-content-center grid-cols-1">
                <div className="flex justify-center">
                    <div className="grid gap-3 font-semibold text-center w-[50rem] h-[40rem]">
                        <div>
                            <h1 className="text-3xl">Design</h1>
                            <p>Overview about this application</p>
                        </div>
                        <div className='flex justify-center'>
                            <video controls className='w-[40rem]' ref={playRef} src={require('../assets/design.mp4')} ></video>
                        </div>
                        <div>
                            <Link to={"/design"} className='bg-sky-200 p-6 rounded-xl hover:bg-sky-600'>
                                Let's Design
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}