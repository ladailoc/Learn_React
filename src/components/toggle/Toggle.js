import React, { useState } from "react";
import "./ToggleStyles.css";
function Toggle() {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {on ? "ON" : "OFF"}
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          ON
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          OFF
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
