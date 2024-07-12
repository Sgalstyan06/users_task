import { useEffect } from "react";

import { useGetData } from "../services/Hooks";

import { UserCardProps } from "../components/UserCard/UserCard";
import Users from "../components/Users/Users";

import { api } from "../constants/api";

import "./Container.css"

const Container = () => {
  const { data, getData, error, loading } = useGetData();

  useEffect(() => {
    getData(`${api}?_limit=9`);
  }, []);

  return (
    <main>
      <Users
        users={data as UserCardProps[]}
        error={error}
        loading={loading}
      />
    </main>
  );
};

export default Container;
