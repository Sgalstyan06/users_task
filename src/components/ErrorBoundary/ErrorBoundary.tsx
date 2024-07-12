import { Fragment, ReactNode } from "react";

import './ErrorBoundary.css';

interface ErrorBoundaryProps {
  children: ReactNode;
  error: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, error }) => {
  if (error) {
    return <h2 className="error-container">Error: {error}</h2>;
  }
  
  return <Fragment>{children}</Fragment>;
};
export default ErrorBoundary;
