import React, { useState, useEffect } from "react";
import Title from "components/Title";
import { waitUntil } from "utilities";

const version = Math.floor(Date.now() / 1000) % 1000;

function Page({ ...props }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register(`/sw.js?v=${version}`)
        .then((registration) => {
          waitUntil(() => !!registration.active)
            .then(() => {
              fetch(`/hi?v=${version}`);
            })
            .catch(console.error);
        });
    } else {
      alert("serviceWorker not support");
    }
  }, []);
  return <Title />;
}

export default Page;
