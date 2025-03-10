# Ice and Fire Test - Wizeline by Yohana Tunarrosa

This is a [**Next.js**](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (Recommended version: `18.x` or later)
- **pnpm** (Package manager)

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```
## ⚙️ Environment Variables

Create a `.env.local` file and add the necessary environment variables:

```
NEXT_PUBLIC_API_URL=your_api_url_here
```

### Running the Development Server

Start the development server:

```bash
pnpm dev
```

Then, open [**http://localhost:3000**](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── src/
│   ├── app/          # Main layout, pages and routes
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom hooks
│   ├── utils/        # Utility functions
│   └── types/        # TypeScript types
│   └── lib/          # Complement resources
├── public/           # Static assets
├── package.json      # Project dependencies and scripts
├── next.config.js    # Next.js configuration
├── tsconfig.json     # TypeScript configuration
├── jest.config.js    # Jest configuration for testing
├── .env.local        # Environment variables
└── README.md         # Project documentation
```


## 📦 Building for Production

To create an optimized production build, run:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

## 🛠 Technologies Used

- **Next.js 15.0** – React framework for server-side rendering & static site generation
- **TypeScript** – Strongly typed JavaScript
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Animations and transitions
- **Lucide React** – Modern icon set for React
- **Jest** – JavaScript testing framework
- **shadcn** – UI components for modern React applications
- 
---

### 🚀 Improvements

- Unit Testing to test individual components and their functions.
- Implement React Query to manage API services, data fetching, and caching.
- Implement the Provider Pattern or State Management.
- Implement server-side rendering (SSR) for better performance.
- Global styling theme by modifying the Tailwind configuration file. 

### 🎯 Contributions & Feedback

Feel free to open an issue or submit a pull request if you have suggestions or improvements!

