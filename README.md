# Calculator_constructor

- Clone repository and install the dependencies

```bash
# Create some project folder and navigate into it:
mkdir folder_name
cd folder_name

# Clone Client repository:
git clone https://github.com/gtm003/calculator_constructor.git

# Install all the dependencies:
npm install
npm run husky:init
```

# 3. The list of available commands

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:ci`

Runs all the tests all over the project and genrates code coverage report. Puts the report into the `/coverage` directory.

### `npm run lint`

Runs project linters (stylelint, eslint, prettier) and generates the report. Doesn't perform autofixing. This script is used on CI as a quality gate.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
