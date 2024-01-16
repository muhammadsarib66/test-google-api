import React from "react";
import { Resizable } from "re-resizable";
const ResizableDiv = () => {
  const Divs = [
    {
      width: "w-[30%]",
      bgColor: "bg-red-500",
    },
    {
      width: "w-[40%]",
      bgColor: "bg-blue-500",
    },
    {
      width: "w-[30%]",
      bgColor: "bg-green-500",
    },
  ];
  return (
    <div className="flex w-screen overflow-hidden">
      {Divs.map((div, index) => {
        return (
          <Resizable
            // style={style}
            className={`flex  mx-4  h-screen ${div.width} ${div.bgColor} `}
            defaultSize={{
              width: div.width,
              height: 1000,
            }}
            minHeight={200}
            maxHeight={500}
          >
            <div key={index}>hello world</div>
          </Resizable>
        );
      })}
    </div>
  );
};

export default ResizableDiv;
