# FASHION FIND 
## An E-Commerce Application • Customer UI

Welcome to the Fashion Find's Customer UI! This repository contains the front end of an online clothing store designed to provide users with a seamless shopping experience.

#### 🔗 [Live website](https://fashion-find.vercel.app)
---
![Cover](/public/preview/cover.png)

## 🔗 Other Links
#### [Ecommerse Admin UI](https://github.com/SujoyKrHaldar/Ecommerse-Admin-UI) • [Ecommerse Rest API](https://github.com/SujoyKrHaldar/Ecommerse-Rest-API)
---

## 📋 Table of Contents
- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

---

## 📖 About the Project

This project is a part of a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This Customer UI serves as the front-end where users can:
- Browse products, collections, categories
- Add items to the cart.
- Place orders.
- Online payments
- Customer login/signup
- Wishlist, order history

---

## ✨ Key Features

- **Responsive Design**: Optimized for all devices.
- **User Authentication**: Signup/login functionality.
- **Product Search and Filter with Pagination**: Easily find desired products.
- **Shopping Cart**: Add, remove, and view items.
- **Payment Gateway Integration**: Secure checkout process.
- **Order Tracking**: View and manage orders.

---

## 🛠 Tech Stack

| **Frontend**                            | **Backend**                  | **Database**        |
|-----------------------------------------|------------------------------|---------------------|
| React.js, Redux-toolkit                 | Node.js & Express.js         | MongoDB Atlas       |
| React-hook-form, React router dom       | Hosted on Render             |                     |
| Tailwind CSS, Lucid icons,              |
| Vercel Deployment                       |                              |                     |

---


## Folder Structure
   Updated soon

<!---  TODO: Update folder str later
```plaintext
mern-ecommerse/
├── rest-api
├── admin-ui
├── customer-ui/
    ├── public/                # Static assets
    ├── src/
    │   ├── components/        # Reusable UI components
    │   ├── pages/             # Page components
    │   
    │   ├── context/           # Context API for state management
    │   ├── utils/             # Helper functions
    │   ├── libs/
            ├── hooks/             # Custom React hooks
            ├── hooks/             # Custom React hooks
            ├── hooks/             # Custom React hooks         
    |   ├── routes/
    |   ├── router.js
    |   ├── index.css           
    |   ├── main.js            # Main app entry point
    │   └── App.js             # Main app entry point
    ├── .env                   # Environment variables
    ├── .env.sample            # Example Environment variables 
    ├── package.json           # Project metadata and dependencies
    └── README.md              # Project documentation
```
---

--->

## 🚀 Installation

> ### Prerequisites
- [Node.js](https://nodejs.org/) installed.

> ### Steps

1. Clone the project

```bash
   git clone https://github.com/your-username/ecommerce-customer-ui.git
```

2. Go to the project directory

```bash
   cd ecommerce-customer-ui
```

3. Install dependencies

```bash
  npm install
```

4. Set up environment variables: Create a .env file in the root directory and add the following

```bash

  VITE_API_URL=<your-backend-api-url>

```

4. Start the server

```bash
  npm run start
```

---

## 💻 Usage

> ### 💻 Development
- Run `npm run dev` to start the app in development mode.
- Ensure the backend API is running for full functionality.

> ### 🚀 Production

> ### 1. Vercel

1. As it is a React project, please add vercel.json file and paste below code:
   ```bash
      "rewrites": [
          {
            "source": "/(.*)",
            "destination": "/"
          }
        ]
   
   ```
2. Push Your Code to GitHub. Ensure your project is committed and pushed to a GitHub repository.
3. Set Up Your Project on Vercel:
   - Log in to [Vercel](https://vercel.com/).
   - Click New Project and import your GitHub repository.
   - Select the root folder of your project.
   - Configure the following settings:
     - Framework Preset: Automatically detects React.
     - Build Command: Defaults to `npm run build`.
     - Output Directory: Defaults to build.
   - Add Environment Variables: In the Vercel dashboard, navigate to Settings > Environment Variables and add your variables, such as:
     - `VITE_API_URL`
   - Deploy: Vercel will automatically build and deploy your application once configured.
   - Access Your Live Site: Your deployed site will be available at `https://your-project-name.vercel.app`
  
> ### 2. Netlify
    
1. Build the app for deployment using `npm run build` command and Deploy the built files to a hosting platform like Netlify.
2. or Login to [Netlify](https://www.netlify.com/) do the same as Vercel deployment. Setup Github repository, select the root folder and import it.

----

    





















