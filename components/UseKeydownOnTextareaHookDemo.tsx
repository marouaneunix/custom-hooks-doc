import { useKeydownOnTextArea } from "@melmerrouni/custom-hooks";
import CSS from 'csstype';


const style = {
  width: "100%",
  height: "150px",
  padding: "12px 20px",
  border: "2px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#f8f8f8",
  fontSize: "16px"
}

const span: CSS.Properties  = {
  fontSize: "33px",
  width: "100%",
  height: "90px",
  color: "#8a2be2",
  textAlign: 'center' as const
}

const UseKeydonwOnTextAreaHookDemo = () => {
    const {code, ref} = useKeydownOnTextArea();
    
    return (
      <>
        <textarea ref={ref} style={style} />
        <div style={span}>{code}</div>
      </>
        
    )
  };


export default UseKeydonwOnTextAreaHookDemo;

