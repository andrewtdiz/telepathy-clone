import React, { useEffect, useRef } from "react";

export default function CodeDisplay(props: any) {
  const [loaded, setLoaded] = React.useState(false);
  let codeElem = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (codeElem === null) return;
    let height = codeElem.current?.clientHeight;
    if (height !== undefined && props.scrollY > height - 400) setLoaded(true);
  }, [props.scrollY]);

  useEffect(() => {
    if (codeElem === null) return;
    let height = codeElem.current?.clientHeight;
    if (height !== undefined && window.pageYOffset > height - 400)
      setLoaded(true);
  }, []);

  return (
    <div ref={codeElem} className="h-screen z-40 bg-white w-full">
      <div className="w-full h-full flex flex-row-reverse items-stretch">
        <div className="h-full flex-1 flex justify-center flex-col items-start">
          <div
            className={
              "flex flex-col items-start transition-all duration-2000 transform delay-500 ease-in-out " +
              (loaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12")
            }
          >
            <h1 className="text-5xl font-bold">
              When performance meets <br /> with design
            </h1>
            <div
              className="w-1/3 bg-black my-8"
              style={{ height: "1px" }}
            ></div>
            <h2 className="text-2xl mb-6 font-bold">Algorithm Visualizer</h2>
            <h2 className="text-base font-medium">
              An website to visualize the major coding algorithms <br/> of computing. Array sorting, graphs, and the future of the web.
            </h2>
            <button className="border px-6 py-4 mt-6 border-gray-400 hover:border-black text-gray-800 hover:text-black">
              Read the blog
            </button>
          </div>
        </div>
        <div className="h-full flex justify-center items-center flex-1">
          <div
            className={
              "w-3/4 transition-all flex flex-col h-1/2 rounded-md delay-500 bg-gray-800 duration-2000 transform ease-in-out " +
              (loaded
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0")
            }
          >
            <div className="w-full flex h-6 p-3">
              <div
                className="w-3 h-3 bg-red-500 rounded-full"
                style={{ background: "#ff5f56" }}
              ></div>
              <div
                className="w-3 h-3 ml-2 rounded-full"
                style={{ background: "#ffbd2e" }}
              ></div>
              <div
                className="w-3 h-3 bg-green-500 ml-2 rounded-full"
                style={{ background: "#27c93f" }}
              ></div>
            </div>
            <div className="p-4">
              <p className="text-white">
                {" "}
                <span className="text-blue-500">let</span>{" "}
                <span className="text-yellow-300">Merge</span> ({" "}
                <span className="text-blue-200">arr</span>:
                <span className="text-green-400">Array</span>&lt;
                <span className="text-green-400">Number</span>&gt;,
                <span className="text-blue-200 ml-1">start</span>:
                <span className="text-green-400">number</span>,
                <span className="text-blue-200 ml-1">end</span>:
                <span className="text-green-400">number</span>,
                <span className="text-blue-200 ml-1">middle</span>:
                <span className="text-green-400">number</span>) &#123;{" "}
                <br/>
                <span className="ml-4">return</span>
                <span className="ml-1 text-yellow-300">Merged</span>()
                <br/>
                &#125;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
