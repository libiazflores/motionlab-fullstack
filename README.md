# 🚗MotionLab
MotionLab - Interactive Physics Simulation Platform  
This repository integrates both backend and frontend components into a single structure for demonstration purposes.

#### Original Repositories:  
[Frontend](https://github.com/KimberlyMarquez/motionlab-frontend)  
[Backend](https://github.com/Crlss123/motionlab-backend)

### Overview
MotionLab is a fullstack educational web application designed to make physics classes more interactive. The platform provides separate views for teachers and students, real-time simulation of a car ascending a ramp, and detailed performance tracking. Teachers can monitor student progress, configure simulations, and analyze results through dynamic dashboards. By combining interactive learning with modern web technologies, MotionLab enhances engagement and supports data-informed instruction.

### Objectives
- **Engagement** → Make physics learning interactive and hands-on for students.  
- **Collaboration** → Enable students to participate in real-time group simulations.  
- **Insightful Analytics** → Provide instructors with performance data and progress metrics.  

### Technology Stack
- **Frontend:** ReactJS with TypeScript  
  - Component-based, and interactive UI.  
- **Backend:** ExpressJS with TypeScript  
  - RESTful API endpoints and simulation logic.  
  - Handles user management and data processing.  
- **Database:** PostgreSQL  
  - Stores user information, simulation results, and session data securely.

### Core Features
- **Custom Lobby Setup:** Instructors can create personalized lobbies and provide students with unique access codes to join sessions.  
- **Interactive Ramp Simulation:** Students run a car simulation ascending a ramp, applying physics concepts such as mass and engine power. Calculations are processed server-side to minimize client load.  
- **Dedicated Views:** Separate interfaces for instructors and students. Instructors monitor activity and results, while students interact with the simulation in real time.  
- **Simulation Configuration:** Instructors can adjust and limit simulation parameters for each student group, customizing the learning experience.  
- **Progress Monitoring:** Tracks student activity and results in real time, offering immediate feedback and insights.  
- **Analytics Dashboard:** Visualizes individual and group metrics, including scores, completion times, and success rates, to support data-informed teaching.

### Installation Guide

##### Backend Setup
- Clone repository  
- Access backend folder  
- Install dependencies  
- `npm install`  
- Start development server  
- `npm run dev`

##### Frontend Setup
- Access frontend folder  
- Install dependencies  
- `npm install`  
- Start development server  
- `npm run dev`  
- For optimal experience, open your browser at a resolution of **1366 x 768** as the UI was designed for tablet-like dimensions.  
- Frontend will be available at: [http://localhost:5173](http://localhost:5173)
