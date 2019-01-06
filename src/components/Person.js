import React from "react";

const Person = props => {
  return (
    <div>
      <div className="person" key={props.Key}>
        <img src={props.imgSrc} alt="" />
        <div>
          <h4>{props.Title + " " + props.FName}</h4>
          <h4>{"JOB Title"}</h4>
          <h5>{props.Email}</h5>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
