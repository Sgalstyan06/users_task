import React from "react";

import "./UserCard.css";

export interface UserCardProps {
  id: number;
  email: string;
  name: { firstname: string; lastname: string };
  phone: string;
  address: {
    city: string;
    street: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ email, name, phone, address }) => {
  return (
    <li className="user-card">
      <h3>
        {name.firstname} {name.lastname}
      </h3>
      <div className="wrapper">
        <p>email: {email}</p>
        <address>
          <p>city: {address.city}</p>
          <p>steet: {address.street}</p>
        </address>
        <p className="phone">phone: {phone}</p>
      </div>
    </li>
  );
};

export default UserCard;
