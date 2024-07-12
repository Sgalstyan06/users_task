import UserCard, { UserCardProps } from "../UserCard/UserCard";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Spinner from "../Loading/Loading";

import "./RederUsers.css";

export interface UsersProps {
  users: UserCardProps[];
  error: string;
  loading: boolean;
}

const RederUsers: React.FC<UsersProps> = ({ users, error, loading }) => {
  if (loading) {
    return (
      <div className="loader-wrapper">
        <Spinner />
      </div>
    );
  }

  return (
    <ul className="user-list">
      <ErrorBoundary error={error}>
        {users?.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </ErrorBoundary>
    </ul>
  );
};

export default RederUsers;
