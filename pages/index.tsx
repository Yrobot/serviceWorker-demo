import React, { useState, useEffect } from "react";
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

  const buttons = [
    {
      children: "GET",
      onClick: () => {
        fetch("/hi");
      },
    },
    {
      children: "POST",
      onClick: () => {
        fetch("/post", { method: "POST" });
      },
    },
    {
      children: "IMAGE",
      onClick: () => {
        fetch("/images/google");
      },
    },
    {
      children: "HTML",
      onClick: () => {
        fetch("/index.html");
      },
    },
    {
      children: "JS",
      onClick: () => {
        fetch("/index.js");
      },
    },
  ];

  return (
    <div className="flex h-screen items-center justify-center space-x-8">
      {buttons.map((btn) => (
        <button className="btn" {...btn} key={btn.children} />
      ))}
    </div>
  );
}

export default Page;
