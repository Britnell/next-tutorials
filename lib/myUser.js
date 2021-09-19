import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import fetchJson from "./fetchJson";

export default function myUser() {
  const { data, error } = useSWR("/api/user",fetchJson);

  React.useEffect(() => {

    //   Router.push(redirectTo);
  }, [data,error]);

  return { user, mutateUser };
}
