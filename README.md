# Playwright Testing Suite (with Docker)

## About the Project

This project, authored by Suharsh Tyagi, encompasses a suite of automated tests using Playwright for web application testing. The tests are designed to interact with web forms, simulating user inputs, file uploads, and form submission.

The key focus of this test suite is to ensure robust form handling, including validation of field inputs, successful file uploads, and accurate submission procedures.

## Tests Covered

- **Form Interaction Test:** Automated testing of form fields, including text inputs, file uploads, and checkbox selections for the form: <https://bukabantuan.bukalapak.com/form/175>
- **Form Submission Test:** Validation of form submission process, ensuring the correct handling of data and navigation upon submission.


### Prerequisites

- Node.js
- npm (Node Package Manager)
- Docker (optional, for running tests in a containerized environment)

### Setup

1. **Clone the Repository**

    ```bash
    git clone https://github.com/SuharshTyagii/supersourcing-assignment.git
    cd supersourcing-assignment
    ```

2. **Install Dependencies**

    Navigate to the project directory and install the necessary Node.js dependencies:

    ```bash
    npm install
    ```

    Playwright

   ```bash
    npx playwright install
    ```

## Running the Tests
### Using the Express API

1. **Start the Express Server**

    Locally:

    ```bash
    npm start
    ```

    Or using Docker:

    ```bash
    docker build -t playwright-test-assignment .
    docker run -p 8080:8080 playwright-test-assignment
    ```

2. **Trigger the Tests**

    Send a GET request to `http://13.213.51.226:8080/run-form-test` to start the tests. This will return a unique process ID.

3. **Check Test Status**

    Send a GET request to `http://13.213.51.226:8080/status?spawnId=<process_id>` to check the status of the test and get real-time output.

4. **View Playwright Report**

    Once the test is complete, access the Playwright report at `http://13.213.51.226:8080/playwright-report/index.html`.

### Locally

Run the form test directly on your machine:

```bash
npm run test:form
```

### Using Docker

#### Option 1: Docker CLI

1. **Build the Docker Image**

    ```bash
    docker build -t playwright-test-assignment .
    ```

2. **Run the Container**

    ```bash
    docker run -it --rm --name playwright-assignment -p 8080:8080 playwright-test-assignment
    ```

#### Option 2: Docker Compose (requires docker-compose to be installed)

1. **Build the Image**

    ```bash
    docker-compose build
    ```

2. **Run the Tests**

    ```bash
    docker-compose up
    ```

## Author

**Suharsh Tyagi**

- Email: suharsh96@gmail.com
