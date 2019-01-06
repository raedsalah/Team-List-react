import React from "react";

const Person = props => {
  return (
    <div className="col-md-3">
      <div className="person" key={props.Key}>
        <img src={props.imgSrc} alt="" />
        <div>
          <h4>{props.Title + " " + props.FName}</h4>
          <h4>{"JOB Title"}</h4>
          <p>{props.Email}</p>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
