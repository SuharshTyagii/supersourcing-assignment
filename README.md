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
    git clone <[repository-url](https://github.com/SuharshTyagii/supersourcing-assignment.git)>
    cd <supersourcing-assignment>
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
    docker run -it --rm --name playwright-assignment -p 9323:9323 playwright-test-assignment
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
