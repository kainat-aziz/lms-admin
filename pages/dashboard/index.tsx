import React from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { GetServerSideProps } from "next";

const index = ({ data }: any) => {
  return <Dashboard data={data} />;
};

export async function getServerSideProps() {
  const res = await fetch(`https://lms-be-api.herokuapp.com/requests`);
  const data = await res.json();
  return { props: { data } };
}

export default index;
