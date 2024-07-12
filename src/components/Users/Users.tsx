import React, { useCallback, useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import { UserCardProps } from "../UserCard/UserCard";
import RederUsers, { UsersProps } from "../RederUsers/RederUsers";

const Users: React.FC<UsersProps> = ({ users, error, loading }) => {
  const [filteredUsers, setFilteredUsers] = useState<UserCardProps[]>([]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const filterUsers = useCallback((searchText: string) => {

    const lowerCaseSearchText = searchText.toLowerCase();

    const filteredItems = users.filter((user) => {
      const { name: { firstname }, phone, email } = user;

      return (
        firstname.toLowerCase().includes(lowerCaseSearchText) ||
        phone.toLowerCase().includes(lowerCaseSearchText) ||
        email.toLowerCase().includes(lowerCaseSearchText)
      );
    });
    
    setFilteredUsers(filteredItems);
  }, [users]);

  return (
    <>
      <SearchBar onChangeCallback={filterUsers} />
      <RederUsers users={filteredUsers} error={error} loading={loading} />
    </>
  );
};

export default Users;
