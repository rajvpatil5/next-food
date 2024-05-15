"use client";
import React from "react";

const error = ({ error }) => {
  return (
    <div className="error">
      <div>Error occur</div>
      <p>Failed to fetch meals data. Try after some time.</p>
    </div>
  );
};

export default error;
