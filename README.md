# Personal Portfolio Website

A modern portfolio website showcasing a developer's projects, skills, and contact information. Built with React, TypeScript, and Tailwind CSS, featuring a unique neumorphic design.

## Features

- Responsive design that works on all devices
- Neumorphic UI elements with soft shadows and subtle gradients
- Dark/light mode toggle with persistent preferences
- Projects showcase with filtering by technology
- Skills and expertise section with categorized skills
- Contact form with validation and backend integration
- Smooth scroll navigation
- Framer Motion animations for enhanced user experience

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Lucide React (for icons)

## Backend Integration

This portfolio is designed to connect with a Java Spring Boot backend for the contact form. To set up the backend:

1. Create a Spring Boot project with the following dependencies:
   - Spring Web
   - Spring Data JPA (optional, for database storage)
   - Spring Mail (for sending emails)
   - Lombok (optional, for reducing boilerplate code)

2. Implement a REST controller to handle form submissions
3. Set up email service to forward contact form messages
4. Deploy the backend to your preferred hosting service

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Build for production: `npm run build`

## Customization

- Replace placeholder text and images with your own content
- Update project examples with your actual work
- Customize colors in the tailwind.config.js file
- Add or remove sections as needed