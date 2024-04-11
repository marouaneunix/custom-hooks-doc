import { useOnlineStatus } from "@melmerrouni/custom-hooks";



const divStyle = {
  border: "1.5px solid",
  borderRaduis: "10px",
  height: "70px",
  display: "grid",
  placeItems: "center",
}

const onlineBull = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: "green",
  boxShadow: "25px 23px 225px -4px rgba(45,176,42,0.75)"
}

const offlineBull = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: "red",
  boxShadow: "25px 23px 225px -4px rgba(176,42,42,0.75)"
}

const UseOnlineStatusHookDemo = () => {
  if(typeof window === 'undefined') return null;
  const {status} = useOnlineStatus();

  return (
      <div style={divStyle}>
          <div style={status === 'online' ? onlineBull : offlineBull}></div>
      </div>
  )
  };


export default UseOnlineStatusHookDemo;

