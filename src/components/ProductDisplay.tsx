import React, {useEffect, useRef} from "react";
import ultrasound from '../images/ultrasound.png'

export default function ProductDisplay(props:any) {
    const [loaded, setLoaded] = React.useState(false)
    let elem = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if(elem===null) return
        let height = elem.current?.clientHeight
        if(height!==undefined && props.scrollY > height-400) setLoaded(true)
    }, [props.scrollY])

    useEffect(() => {
        if(elem===null) return
        let height = elem.current?.clientHeight
        if(height!==undefined && window.pageYOffset > height-400) setLoaded(true)
    }, [])

  return (
    <div ref={elem} className="h-screen z-40 bg-white w-full">
      <div className="w-full h-full flex items-stretch">
        <div className="h-full flex-1 flex justify-center flex-col items-end">
          <div className={"flex flex-col items-start transition-all duration-2000 transform ease-in-out " + (loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12')}>
            <h1 className="text-5xl font-bold">
              I seek to innovate in <br /> exciting, new ways
            </h1>
            <div
              className="w-1/3 bg-black my-8"
              style={{ height: "1px" }}
            ></div>
            <h2 className="text-2xl mb-6 font-bold">UM Ultrasound App</h2>
            <h2 className="text-base font-medium">
              An application for emergency medicine resident physicians and
              students <br /> to collaboratively learn clinical emergency
              ultrasound.
            </h2>
            <button className="border px-6 py-4 mt-6 border-gray-400 hover:border-black text-gray-800 hover:text-black">
              Learn more
            </button>
          </div>
        </div>
        <div className="h-full flex justify-center items-center flex-1">
            <div className={"w-3/4 transition-all duration-2000 transform ease-in-out " + (loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0')}>
                <img src={ultrasound} className={"object-cover w-full"} alt=""/>
            </div>
        </div>
      </div>
    </div>
  );
}
