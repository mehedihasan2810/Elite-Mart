import React from "react";
import chalk from 'chalk';
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";






const Practice = async () => {



  const session = await getServerSession(options);
  return <h1>protected routeeeeee</h1>;
};

export default Practice;
