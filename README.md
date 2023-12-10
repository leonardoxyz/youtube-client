# YouTube Video Fetcher

## Overview

This project is a web application with a C# WebAPI back-end and a Vite with ReactJS front-end. The purpose of the project is to fetch videos from any YouTube channel, limiting the display to 10 results. The display limit is easily adjustable in the back-end. To use the system, follow the instructions below:

## Requirements

Make sure to have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)

## Back-end Configuration (C# WebAPI)

1. Clone the front-end: `git clone https://github.com/leonardoxyz/youtube-client`
2. Clone the back-end: `git clone https://github.com/leonardoxyz/youtube-server`

## Execution

1. In the back-end directory, build and run the C# application.
2. In the front-end, remember to install npm packages using `npm i or npm install`
3. In the front-end directory, run the command: `npm run dev`
4. Access the application in the browser: `http://localhost:3000`

## Usage

1. Upon accessing the application, you'll see a form.
2. Enter the YouTube channel URL (the part after "channel/").
3. Click the search button to retrieve the 10 most recent videos from the channel.
4. The results will be displayed on the page.

### Note

Adjust the security settings in the back-end to allow access to the YouTube API. Refer to the YouTube API documentation for more information.

Enjoy the project! Feel free to contribute or provide feedback.
