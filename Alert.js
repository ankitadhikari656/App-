import React from 'react'

// function Alert(props) {
//   //  if (props.alert) {
//   //   return null; 
//   //  }
//   return (
//     <div>
//        <div className={`alert alert-${props.alert.type} alert-dismissible fade show1 `}role="alert">
//    <div> {props.alert.type}</div>: {props.alert.msg}
//   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>
//     </div>
//   )
// }


function Alert(props) {
  if (!props.alert) {
    return null; // or return an empty fragment: return <></>;
  }

  return (
    <div className={`alert alert-${props.alert.type}`} >
      {props.alert.msg}
    </div>
  );
}


export default Alert
