import React, {useEffect} from "react";

export default function Landing(props: any) {
    const [loaded, setLoaded] = React.useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

  return (
    <div className="h-screen relative flex flex-col justify-center items-end overflow-hidden bg-green-100 bg-opacity-50">
      <div
        className={"z-20 absolute flex flex-col items-center justify-center h-screen w-full" }
        style={{ transform: "translateY(" + props.scrollY * 0.9 + "px)" }}
      >
        <div className={"flex flex-col items-center transition transform duration-1000 "+(loaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0')}>
            <h1 className="text-8xl font-medium text-center text-white">
            I build extraordinary <br /> software
            </h1>
            <h1 className="text-xl mt-12 text-white">
            I create technology solutions that brings results, defines brands and
            builds value for your company or business.
            </h1>
            <h1 className="text-xl mt-2 text-white">
            Learn more about my approach to{" "}
            <u className="cursor-pointer">service</u> and broad{" "}
            <u className="cursor-pointer">portfolio of work</u>{" "}
            </h1>
        </div>
      </div>
      <div
        className="w-full h-screen absolute top-0 left-0"
        style={{ background: "#ff3d25" }}
      ></div>
      <div className="w-full flex flex-col items-center justify-end h-screen absolute top-0 left-0">
        <svg
          className={"text-white h-6 w-6 mb-16 fill-current transition transform delay-300 duration-1000 "+(loaded ? '-translate-y-0 opacity-100' : '-translate-y-12 opacity-0')}
          style={{ transform: "translateY(" + props.scrollY * 0.9 + "px)" }}
          xmlns="http://www.w3.org/2000/svg"
          id="Layer"
          height="512"
          viewBox="0 0 64 64"
          width="512"
        >
          <path d="m32 8c-1.104 0-2 .896-2 2v39.899l-14.552-15.278c-.761-.799-2.026-.832-2.828-.069-.8.762-.831 2.027-.069 2.827l16.62 17.449c.756.756 1.76 1.172 2.829 1.172 1.068 0 2.073-.416 2.862-1.207l16.586-17.414c.762-.8.73-2.065-.069-2.827-.799-.763-2.065-.731-2.827.069l-14.552 15.342v-39.963c0-1.104-.896-2-2-2z" />
        </svg>
      </div>
    </div>
  );
}
