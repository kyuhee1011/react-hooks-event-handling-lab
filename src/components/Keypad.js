// Code Keypad Component Here
import React from "react";

function Keypad() {
  function enterPassword(e) {
    console.log(`Entering password...`);
  }
  return (
    <div>
      <input
        type="password"
        onChange={enterPassword}
        placeholder="Enter Password"
      />
    </div>
  );
}

export default Keypad;
