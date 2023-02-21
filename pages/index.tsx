import React, { useState, useEffect } from "react";
import Title from "components/Title";

function Page({ ...props }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    } else {
      alert("serviceWorker not support");
    }
  }, []);
  return <Title />;
}

export default Page;
