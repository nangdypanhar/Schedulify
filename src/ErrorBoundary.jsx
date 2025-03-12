import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{ color: "red" }}>Error: {this.state.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;