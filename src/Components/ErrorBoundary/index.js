import React from "react";
import "../../Styles/styles.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // This method is called if any error is encountered
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  // This will render this component wherever called
  render() {
    if (this.state.errorInfo) {
      return (
        <div className="card error_box">
          <h2>Something went wrong, Please try again! </h2>
          <div className="card-body">
            <details>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        </div>
      );
    }
    // Normally, just render children, i.e. in
    // case no error is Found
    return this.props.children;
  }
}

export default ErrorBoundary;
