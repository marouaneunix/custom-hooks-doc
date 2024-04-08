import { useLocationHash } from "@melmerrouni/custom-hooks";
import { ChangeEvent } from "react";



const divStyle = {
  border: "1.5px solid",
  borderRaduis: "10px",
  backgroundColor: "#cce6ff",
  height: "70px",
  display: "grid",
  placeItems: "center",
}

const inputStyle = {
  padding: "10px",
  border: "2px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#f8f8f8",
  fontSize: "16px"
}
const UseLocationHashHookDemo = () => {
  if(typeof window === 'undefined') return null;
  const {hash, updateHash: setHash} = useLocationHash();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      
      setHash(e.target.value);
  }

  return (
      <div style={divStyle}>
          <input style={inputStyle} value={hash} onChange={handleChange} aria-label="hash-input" alt="set new Hash"/>
      </div>
  )
  };


export default UseLocationHashHookDemo;

