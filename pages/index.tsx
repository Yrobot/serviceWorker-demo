import React, { useState, useEffect } from "react";
import { waitUntil } from "utilities";

const version = Math.floor(Date.now() / 1000) % 1000;

function Page({ ...props }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(`/sw.js`);

      // check if service worker is active
      waitUntil(() => !!navigator.serviceWorker.controller, { max: 9000 }).then(
        () => {
          fetch(`/hi`);
        }
      );
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
        fetch("/iframe/index.html");
      },
    },
    {
      children: "JS",
      onClick: () => {
        fetch("/iframe/index.js");
      },
    },
    {
      children: "CSS",
      onClick: () => {
        fetch("/iframe/style.css");
      },
    },
  ];

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-12">
      <iframe
        src="/iframe/index.html"
        className="h-[60vh] w-[60vw] flex-none"
      ></iframe>
      <div className="flex w-full flex-none items-center justify-center space-x-8 py-4">
        {buttons.map((btn) => (
          <button className="btn" {...btn} key={btn.children} />
        ))}
      </div>
    </div>
  );
}

export default Page;
