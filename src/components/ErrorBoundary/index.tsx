import React, { ErrorInfo, PropsWithChildren } from 'react';

type BoundoryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<PropsWithChildren, BoundoryState> {
  constructor(props: PropsWithChildren) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(_error: Error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { name, stack, message } = error;
    const { componentStack } = errorInfo;
    fetch('/api/error', {
      body: JSON.stringify({ name, stack, message, componentStack }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
