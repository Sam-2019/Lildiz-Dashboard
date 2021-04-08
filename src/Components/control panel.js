import React from "react";

const controlPanel = ({ width, height, color }) => {
  return (
    <div
      style={{
        transform: "rotate(90deg)",
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="control-panel"
      >
        <path
          fill={color}
          d="M87 32v71h18V32H87zm160 0v345h18V32h-18zm160 0v167h18V32h-18zM50 121c-5.14 0-9 3.9-9 9v28c0 5.1 3.86 9 9 9h92c5.1 0 9-3.9 9-9v-28c0-5.1-3.9-9-9-9H50zm37 64v295h18V185H87zm283 32c-5.1 0-9 3.9-9 9v28c0 5.1 3.9 9 9 9h92c5.1 0 9-3.9 9-9v-28c0-5.1-3.9-9-9-9h-92zm37 64v199h18V281h-18zM210 395c-5.1 0-9 3.9-9 9v28c0 5.1 3.9 9 9 9h92c5.1 0 9-3.9 9-9v-28c0-5.1-3.9-9-9-9h-92zm37 64v21h18v-21h-18z"
        />
      </svg>
    </div>
  );
};

export default controlPanel;
