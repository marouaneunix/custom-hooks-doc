import { useMouseMove } from "@melmerrouni/custom-hooks";



const style = {
  border: "1.5px solid #1e90ff",
  borderRaduis: "10px",
  backgroundColor: "#cce6ff",
  height: "70px"
}
const UseMouseMoveHookDemo = () => {
    const {position, ref} = useMouseMove();
    
    const initialMessage = `Move the cursor 🖱️ inside the div`;
    const Position = () => (
      <div>
        <p>X: {position.clientX}</p>
        <p>Y: {position.clientY}</p>
      </div>
    )
;    
    return (
      <div ref={ref} style={style}>
        {position ? <Position /> : initialMessage }
      </div>
    )
  };


export default UseMouseMoveHookDemo;

