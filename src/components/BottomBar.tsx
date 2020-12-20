import React, {useRef, useEffect} from "react";

export default function BottomBar() {
    let elem = useRef<HTMLDivElement | null>(null)
    const [loaded, setLoaded] = React.useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

  return (
    <div ref={elem}
      className={"fixed bottom-0 z-50 text-center w-full h-12 text-white flex justify-center items-center transition transform duration-1000 delay-500 " +(loaded ? 'translate-y-0' : 'translate-y-12')}
      style={{ background: "#ff3d25", boxShadow: "0 -1px 6px rgba(0,0,0,.25)" }}
    >
      <p>I'm currently</p>
      <button className="ml-1 underline">looking</button>
      <p className="ml-1">for a new place to bring my talents</p>
    </div>
  );
}
