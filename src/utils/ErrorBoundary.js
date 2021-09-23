import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div class="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div class="max-w-max mx-auto">
            <main class="sm:flex">
              <p class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
                🤦‍♀️
              </p>
              <div class="sm:ml-6">
                <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Something went wrong
                  </h1>
                  <p class="mt-1 text-base text-gray-500">
                    Please try refreshing the page.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
