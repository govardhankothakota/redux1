import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let inputRef = useRef();
  let dispatch = useDispatch();
  let storeObj = useSelector((store) => {
    return store;
  });

  return (
    <div className="App">
      <h2>Redux</h2>

      <input ref={inputRef}></input>
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "addBusinessman", data: inputRef.current.value });
        }}
      >
        Businessmen
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "addCompany", data: inputRef.current.value });
        }}
      >
        Companies
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "addPlace", data: inputRef.current.value });
        }}
      >
        Places
      </button>

      <br />
      <h2>Businessmen : {storeObj.businessmen.join()}</h2>
      <h2>Companies : {storeObj.companies.join()}</h2>
      <h2>Places : {storeObj.places.join()}</h2>
    </div>
  );
}

export default App;
