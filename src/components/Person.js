import React from "react";

const Person = props => {
  return (
    <div className="col-md-3">
      <div className="person" key={props.Key}>
        <img src={props.imgSrc} alt="" />
        <div>
          <h4>{props.Title + " " + props.FName}</h4>
          <h5>{"JOB Title"}</h5>
          <p>{props.Email}</p>
          <hr />
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
