import React from "react";
//import { useAuth } from "../../context/auth";
import useFetch from "./useFetch";
//import useLogger from "./useLogger";

const TestHook = () => {
  //   const [auth, setAuth] = useAuth;
  //   useLogger("custom hook logger line 8 HomePage component ", auth);

  //switch

  let numS = 1;
  let wordS;
  switch (numS) {
    case 1:
      wordS = "one";
      break;
    case 2:
      wordS = "two";
      break;
    case 3:
      wordS = "three";
      break;
    default:
      wordS = "unknown";
      break;
  }
  console.log(wordS);
  //nested ternary operators

  let num = 1;
  let test = num === 1 ? "one" : "others";

  console.log(test);
  let word =
    num === 1 ? "one" : num === 2 ? "two" : num === 3 ? "three" : "unknow";

  console.log(word);

  //since useFetch hook returning data, error, loading so we destructring so that we can get directly
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );
  if (loading) {
    return (
      <div>
        <h1>Loading,.........</h1>
      </div>
    );
  }
  if (error) {
    return <h1>error</h1>;
  }

  //custom hook

  return (
    <div className="container-fluid">
      <h1 className=" col-md-9 text-center">||||||||||||TestHook||||||||||</h1>
      <div className="row">
        <div className="col-md-9 text-center md-3 p-3 ">
          {data.map((user) => (
            <h2 key={user.id}>{user.name}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestHook;
