import React from "react";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div class="max-w-max mx-auto">
          <main class="sm:flex">
            <p class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
              🤗
            </p>
            <div class="sm:ml-6">
              <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Landing Page
                </h1>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default LandingPage;
