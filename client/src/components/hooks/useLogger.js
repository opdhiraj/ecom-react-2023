import React, { useEffect } from "react";
//custom hook

const useLogger = (value) => {
  //value will get as arguments
  useEffect(() => {
    console.log("value");
  }, [value]);
};

export default useLogger;
