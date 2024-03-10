![alt text](image.png)

Playwright (JS binding) and Cucumber (BDD) 
The Playwright framework with JavaScript bindings, integration of Cucumber for BDD and 
Page Object Model (POM) design pattern establishes a robust platform for automated browser testing that are both descriptive and human-readable. This combination enables test scenarios to be written in plain English, facilitating collaboration between developers, QA professionals, and non-technical stakeholders. The framework supports testing across multiple browsers, making it ideal for cross-browser validation. With the addition of Cucumber's BDD approach, the test automation suite serves not just as a testing tool but also as live documentation of the system's behaviour. 

The tech stack used in this project are:
•	JavaScript as the programming language for writing test code
•	Cucumber integrated in to the framework
•	NPM as the build tool
•	VSCode as the preferred IDE for writing typescript code.

Features
•	This testing framework supports Behaviour Driven Development (BDD). Tests are written in plain English text called Gherkin
•	Supports execution of tests in different browsers.
•	Supports running scenarios in parallel mode. 
•	Flaky scenario can be Retried multiple times until either it passes or the maximum number of attempts is reached. You can enable this via the retry configuration option.
•	The Page Object Model (POM) design pattern is implemented, enhancing test maintenance and reducing code duplication by encapsulating page-specific elements and interactions within distinct classes.
•	Configuration are controlled by .env file such as BaseURL etc.
•	Generates Cucumber HTML Report & JSON Report.
•	Rerun only failed features
•	Dockerization
•	Easy and simple integration to CI/CD tools like AzureDevOps.

Get Started
Here's a guide on how to use this project after downloading it: 

Pre-requisites 
Before running the project, ensure you have the following installed:
Node.js: The runtime environment to execute the JavaScript code outside a web browser.
npm (Node Package Manager): To manage the project's dependencies. 


Setting Up the Project 
After downloading the project, you'll typically follow these steps: 

Unzip the Project: If the project comes as a compressed file, extract it to your desired location. 
Install Dependencies: Open a terminal and navigate to the project's root directory. 
Then, run: npm install
Install Cucumber: npm install @cucumber/cucumber 
Install dotenv for environment variable management: npm install dotenv 
This command installs all the dependencies defined in the package.json file. 
If you want to execute in headed mode please set “headless attribute” to false in browser Manager.js file

Please install below list of plugin – 
 
Understanding the Framework Structure 
.github: This directory may contain GitHub Actions or workflows if CI/CD is integrated with GitHub.
node_modules: Generated directory containing all the packages that npm has installed.
report: This directory might be used to store test reports and logs. These can be generated in various formats like HTML, JSON, etc.
src: The source directory where the bulk of your test code resides.
browser: Contains browser-specific configurations and possibly custom utilities for browser interactions.
pages: Contains Page Object Models, which are classes or functions representing web pages, encapsulating page-specific selectors and actions.
features: Contains. feature files written in Gherkin language describing the BDD scenarios.
step_definitions: This directory contains JavaScript files that translate the Gherkin steps from .feature files into executable code.
hooks.js: A JavaScript file that can contain 'hooks' for setting up preconditions and cleanups (like before/after hooks in Cucumber).
.env, .env.example: Environment variable files which can be used to set up different environments for testing (like staging, production, etc.).
Dockerfile: If containerization is part of the project, this file defines the Docker container configuration. 


Exercise Instructions: 
- Use https://automationintesting.online/ as the system under test
- Write Automated UI Tests for the contact form in language/framework of choice (tests don't need to be exhaustive)
         - contact form can be found if you scroll down on the initial page that loads
- Stretch Goal - Containerize these
- Ensure there is documentation on how to run/setup
- Check in somewhere we are able to access (e.g. GitHub) 


Exercise Summary:
SUT (System Under Test): The website "https://automationintesting.online/" was used as the system under test.
Automated UI Tests: Two main automated tests have been crafted for the contact form using the chosen language/framework. 
The first test is dedicated to validating the functionality of the form fields and successful submission.
The second test focuses on verifying the error messages that appear when form submission criteria are not met.
Stretch Goal - Containerization: The tests have been containerized to run in a consistent environment, utilizing a virtual machine and an Azure DevOps (ADO) agent. [PF Below Image]
•	Docker Build: A Docker image is created from a Dockerfile located in the current directory. The image is tagged with a unique identifier composed of the Docker ID, image name, and build ID.
•	Docker Login: Performs authentication with the Docker container registry using secure credentials.
•	Docker Push: The tagged Docker image is pushed to the container registry, making it ready for deployment.
•	Docker Logout: Ensures security by logging out from the container registry after the push operation.


  
 


Documentation: A README.md file is included, providing comprehensive instructions on the setup and execution of the project.
Version Control and Access: The project has been committed to GitHub and Azure DevOps for easy access and future collaboration.
 
