import React from "react";

function Title({ title = "Hello World!" }: { title?: string }) {
  return (
    <div className="flex h-screen items-center justify-center text-3xl font-bold text-neutral-800">
      {title}
    </div>
  );
}

export default Title;
