import React, { useState, useEffect } from "react";
import Title from "components/Title";

function Page({ ...props }) {
  return <Title />;
}

export async function getStaticProps({ params }) {
  return { props: {} };
}

export default Page;
