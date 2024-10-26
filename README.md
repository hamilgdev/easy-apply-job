# 🧳 Easy Apply Job

![Cover application](/assets/og.png)

Easy Apply Job is an artificial intelligence-powered platform designed to help candidates prepare for and apply to job openings more effectively.

Users can provide the URL of a job offer, and the platform will extract and analyze the job offer data using web scraping techniques. It will then compare this information with the user's profile, including their CV and skills, generating a detailed report that will guide the user in creating a customized CV tailored to the specific job offer.

## 📜 System Requirement

- Node.js `20.10.0` or later [👉 Install Node](https://nodejs.org/es/download)
- NPM [👉 Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Nextjs `14*` or later [👉 Install Next](https://nextjs.org/docs/getting-started)
- Nestjs `10*` or later [👉 Install Nest](https://docs.nestjs.com/)
- GNU Make `3.81` or later [👉 Install Make](https://www.gnu.org/software/make/)

### Visual Studio Code

Additional extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): It helps you see the alerts from the linter in real-time in your editor.

## 🗃️ Environment

You can use the `.env.template` file to create your `.env` file. This file is used to set the environment variables.

## 📚 Folder Structure

- `frontend/`: Source code base. Frontend made with **NextJS**
- `backend/`: Source code base. Backend made with **NestJS**
- `provision/`: The files to provision the Docker containers
- `Makefile`: The file to run the commands to initialize, execute and more the application

## 🐳 Running the app inside containers

To run the application with containers you will need:

- Docker. [👉 Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose. [👉 Install Docker Compose](https://docs.docker.com/compose/install/)

then run the following command in the root `/` to initialize the application:

Build the containers

```bash
  make app.build_dev
```

Run the containers

```bash
  make app.start_dev
```

Or you can run the **frontend** container with one command

```bash
  make frontend.start_dev
```

Or you can run the **backend** container with one command

```bash
  make backend.start_dev
```

## 🚀 Running the implementation

When the application is running, it uses the default setting

you can access the **frontend** in the following url:

- [http://localhost:4200](http://localhost:4200)

you can access the **backend** in the following url:

- [http://localhost:3000/api](http://localhost:3000/api)
