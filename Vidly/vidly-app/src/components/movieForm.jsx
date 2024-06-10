import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = (history) => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Movie Form{params.id}</h1>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
