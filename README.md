# LinkShare Web Application

https://link-sharing-app-ebon.vercel.app/

Welcome to the LinkShare web application repository! This project allows users to create a personalized page with all their social links and personal information, which can then be shared via a URL. Visitors to the page can see all the social links, the user's first name, last name, and optionally their email.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create a personalized page with your social links.
- Share the page with a unique URL.
- Include personal information like first name, last name, and email (optional).
- Responsive design with Tailwind CSS.
- Real-time data fetching and updates with Apollo Client and Hasura.
- Authentication: Secure user authentication using Auth0.

## Demo

You can check out a live demo of the application [here](https://link-sharing-app-ebon.vercel.app/).

## Tech Stack

- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Hasura Cloud with Apollo Client for GraphQL
- **Database**: NEON (PostgreSQL) linked with Hasura Cloud
- **Authentication**: Auth0

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- npm or yarn

### Clone the repository

```sh
git clone https://github.com/younex01/link-sharing-app
cd link-sharing-app
```
//Install dependencies
```sh
npm install
# or
yarn install
```
Set up the database
Ensure you have your Hasura GraphQL endpoint ready.

Configure environment variables
Create a .env file in the root of the project and add your environment variables:

VITE_REACT_APP_AUTH0_DOMAIN=your_auth0_domain
VITE_REACT_APP_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_REACT_APP_DOMAIN_PREVIEW=http://localhost:5173/preview/

Run the application
```sh
npm run dev
# or
yarn run dev
```
The app should now be running on http://localhost:5173/.

## Usage
Sign up or log in to create your personalized link page.
Add your social links and personal information.
Share your unique URL with others.
## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
## License
Distributed under the MIT License. See LICENSE for more information.

Project Link: https://github.com/younex01/link-sharing-app