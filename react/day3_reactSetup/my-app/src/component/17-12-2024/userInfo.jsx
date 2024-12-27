import { useState } from "react";
const UserInfo = () => {
  const [state, setState] = useState({
    name: "Vivek kumar",
    email: "viveksoni0987@gmail.com",
    dob: "06/09/2002",
    address: "bettiah west champaran" 
  });

  const onBtnClick = ()=>{
    setState({  
      ...state,
      name: "raja soni"
      });
  };

  return (
    <>
      <div>
        <h3>i show user information</h3>
        <p>name: {state.name}</p>
        <p>email: {state.email}</p>
        <p>dob: {state.dob}</p>
        <p>address: {state.address}</p>
      </div>
      <div>
        <button onClick={onBtnClick}>Update Info</button>
      </div>
    </>
  );
};

export default UserInfo;
