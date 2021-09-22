import React, { useState, useEffect } from "react";

function Page({ ...props }) {
  return <div>Next</div>;
}

export async function getStaticProps({ params }) {
  return { props: {} };
}

export default Page;
