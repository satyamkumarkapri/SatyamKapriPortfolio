# Satyam Kumar Kapri - Professional Developer Portfolio

A stunning, fully responsive portfolio website built with React, Vite, and modern CSS featuring glassmorphism design. This portfolio is engineered to highlight competitive programming achievements, real-time GitHub projects, and extensive technical skills.

## 🚀 Key Features

*   **Dynamic GitHub Projects Feed:** Includes a seamless integration with the GitHub API. Clicking "View All Projects" opens a beautifully styled modal that fetches and displays real-time repositories directly from GitHub.
*   **ATS-Friendly Resume Generator:** Features a custom-built, classic Harvard-style `resume.html` that allows recruiters to instantly generate and print a perfectly formatted A4 PDF natively through the browser.
*   **Live Contact Form:** Fully functional contact form powered by Web3Forms, delivering messages straight to the inbox without needing a backend server.
*   **Modern Aesthetics:** Designed from scratch using pure, modern CSS variables, responsive `clamp()` typography, and elegant glassmorphism effects.
*   **Competitive Programming Highlights:** Custom "Achievements" section designed to showcase CodeChef 5★ rating, DSA global rankings, and over 640+ solved algorithmic problems.

## 🛠️ Tech Stack

*   **Frontend:** React 18, TypeScript
*   **Build Tool:** Vite
*   **Icons:** Lucide React
*   **Styling:** Vanilla CSS3 (Custom Variables, Flexbox, Grid)
*   **API Integration:** GitHub REST API

## 💻 Getting Started (Local Development)

To run this project locally on your machine:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/satyamkumarkapri/SatyamKapriPortfolio.git
    cd SatyamKapriPortfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📝 Customization Guide

*   **Theme Colors:** You can quickly change the entire color scheme by updating the `--color-primary` CSS variables inside `src/index.css`.
*   **Resume Updates:** To update the downloadable resume, edit the raw HTML inside `public/resume.html`. It is already optimized for standard A4 printing.
*   **Contact Form:** Update the hidden `access_key` input in `src/components/CTA.tsx` with your own Web3Forms access key to route emails to your personal inbox.

---
*Designed & Built by [Satyam Kumar Kapri](https://github.com/satyamkumarkapri)*
