import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

export default function Spinner({ loading }) {
  return (
    <FadeLoader
      color="#a0c2e4"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}
