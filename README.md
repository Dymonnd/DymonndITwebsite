# Dymonnd IT Website

Official website for **Dymonnd IT**, an IT support business servicing homes and small businesses on the Central Coast, NSW.

🌐 **Live Website:** dymonndit.com

## 📌 About the Project

This repository contains the source code for the Dymonnd IT website.

I built and deployed the website from the ground up as a practical project combining web development with real-world IT infrastructure, DNS, Microsoft 365, email authentication, and cloud deployment.

The website provides information about Dymonnd IT's services and includes a working support/contact system.

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Git & GitHub
* Cloudflare Pages
* Cloudflare DNS
* Cloudflare Pages Functions
* Resend API
* Microsoft 365
* Exchange Online

## ☁️ Hosting & Deployment

The website is deployed using **Cloudflare Pages** and connected directly to this GitHub repository.

Changes pushed to the `main` branch can be automatically deployed to the live website.

A custom domain is configured for the production site:

**dymonndit.com**

This project provided hands-on experience with:

* Git-based deployments
* Custom domain configuration
* DNS management
* HTTPS/SSL
* Cloudflare Pages
* Production website troubleshooting

## 📧 Contact Form & Email

The website includes a custom contact/support form.

The backend is handled using a **Cloudflare Pages Function**, allowing the static website to securely process form submissions without exposing API credentials in the frontend.

Form submissions are delivered using the **Resend API**.

The API key is stored securely as an encrypted environment secret rather than being included in the website source code.

This implementation provided experience with:

* Serverless functions
* API integration
* Environment variables and secrets
* Form validation
* Email delivery
* Domain-based email sending
* Troubleshooting production email systems

## 🔐 Microsoft 365 & DNS

The Dymonnd IT domain is also integrated with **Microsoft 365 and Exchange Online**.

As part of the project, I worked with:

* Microsoft 365 tenant administration
* Exchange Online
* Custom Microsoft 365 domains
* DNS management
* MX records
* SPF
* DKIM
* DMARC
* Email authentication
* Mail flow and deliverability testing
* CIPP for Microsoft 365 management

The website infrastructure was configured while maintaining the DNS records required for Microsoft 365 email services.

## 💻 IT Skills Demonstrated

Although this repository contains a website, the project was also designed as a practical IT environment.

Skills demonstrated include:

* Microsoft 365 administration
* DNS configuration and troubleshooting
* Email authentication and security
* Cloud infrastructure
* Domain management
* API integration
* Serverless functions
* Git/GitHub workflows
* Website deployment
* Troubleshooting
* Basic web development

## 🔒 Security

Sensitive information such as API keys, passwords, authentication tokens, and Microsoft 365 credentials are **not stored in this repository**.

Production secrets are stored using secure environment variables.

## 🚀 Future Improvements

This project will continue to evolve as I expand my IT knowledge and build additional services and projects.

Planned improvements may include:

* Additional IT project documentation
* Expanded service pages
* Improved accessibility
* Performance improvements
* Additional security hardening
* Further Microsoft 365 integration

## 👤 Author

**Dymonnd IT**

IT Support • Microsoft 365 • Networking • Cybersecurity

Central Coast, NSW, Australia

**Website:** dymonndit.com
