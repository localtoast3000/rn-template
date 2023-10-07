# React Native Template TS

Welcome to this React Native template, tailored for developers looking to jumpstart their mobile app development journey with the power of TypeScript and the styling capabilities of NativeWind.

### TypeScript

TypeScript brings static typing to JavaScript, enhancing code quality, readability, and reducing potential runtime errors. By integrating TypeScript, this template ensures a more robust codebase right from the start.

## Scripts

This React Native template provides a set of utility scripts to streamline your development process. Below is a description of each script:

- **rename-project-win**:

  - Executes the `rename-project.bat` script located in the `./scripts/shell/` directory.
  - Use this on Windows to rename your project.

- **rename-project-unix**:

  - Makes the `rename-project.sh` script executable and then runs it.
  - Use this on Unix-like systems (e.g., Linux, macOS) to rename your project.

- **clean-android**:

  - Cleans the Android build, removes the `node_modules` directory, and reinstalls the project dependencies.
  - Useful for resolving build-related issues on Android.

- **clean-ios**:

  - Deletes the iOS build, reinstalls the iOS pods, removes the `node_modules` directory, and reinstalls the project dependencies.
  - Useful for resolving build-related issues on iOS.

- **exports-gen**:

  - Executes a node script to generate exports for various source directories.
  - Helps in organizing and managing imports in your project.

- **type-check**:

  - Runs the TypeScript compiler to check for type errors.
  - Ensures type safety in your project.

- **link-assets**:

  - Links assets for your React Native project.
  - Ensures that all your static assets (like images) are correctly linked and accessible.

- **reactotron**:

  - Sets up a reverse connection for Reactotron on Android.
  - Useful for debugging with Reactotron.

- **android**:

  - Runs your React Native project on an Android device or emulator.

- **ios**:

  - Runs your React Native project on an iOS device or simulator.

- **lint**:

  - Runs ESLint on your project to check for code quality and style issues.

- **start**:

  - Starts the React Native Metro bundler.

- **reset-cache**:

  - Starts the React Native Metro bundler with cache reset.
  - Useful when facing caching issues.

- **test**:
  - Runs Jest tests for your project.
