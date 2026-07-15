<<<<<<< HEAD
# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.16.3 create --template minimal --no-types --add tailwindcss="plugins:none" prettier eslint --install npm hackathon-hostel-allotment
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
=======
# Hackathon Hostel Allotment System

## Overview
This project is being developed as part of the Web Team selection process.

The objective is to build a web application using **SvelteKit** that automates hostel room allocation for hackathon participants.

## Planned Features
- Upload Hostel Availability Excel file
- Upload Participants Excel file
- Automatic room allocation based on gender and room capacity
- Display allocation results
- Download the final allotment as an Excel file

## Tech Stack
- SvelteKit
- JavaScript
- XLSX

## Project Status
🚧 Work in Progress

Development is currently in progress. The project will be updated with the implementation and documentation soon.
>>>>>>> f328d4458e21858f85fbc477089fe6c3b27d598f
