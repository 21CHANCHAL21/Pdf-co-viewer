# Real-Time PDF Co-Viewer

This project is a real-time PDF co-viewing application built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.IO for bidirectional communication. The application allows an admin to control PDF navigation while other viewers follow along, making it ideal for presentations, remote learning, and collaborative document viewing.

## Features

- **Real-Time Sync**: All participants view the same page in real-time, synchronized by the admin's navigation.
- **Role-Based Authentication**: Simple login system with predefined roles to distinguish between admins and viewers.
- **Admin Controls**: Admin can control page navigation (Previous/Next).
- **Visual Indicators**: Clear indicators of loading state and user roles.
- **Interactive PDF Viewing**: Users can view PDF files with smooth page transitions.

## Technologies Used

- **Frontend**: React, HTML/CSS with Bootstrap for styling
- **Backend**: Node.js, Express, Socket.IO for real-time communication
- **PDF Rendering**: PDF.js
- **Authentication**: Mock data-based role management (admin/viewer)

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/Pdf-co-viewer.git
   cd real-time-pdf-co-viewer

## Installation and Setup

### Install Dependencies

- **For the backend:**
  ```bash
  cd backend
  npm install
- **For the frontend:**
- cd pdf-co-viewer
  npm install

  And install the required module like socket.io etc.

## Access the Application

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

2. Log in using the following mock credentials:

   - **Admin:** 
     - Username: `admin`
     - Password: `admin123`

   - **Viewer:**
     - Username: `viewer`
     - Password: `viewer123`

3. The **admin** can control page navigation, while **viewers** will see pages in sync with the admin.

## How It Works

- **Login:** Users log in as either an admin or a viewer.

- **Real-Time Sync:** When the admin navigates pages, Socket.IO broadcasts page changes to all connected clients, syncing the PDF view.

- **PDF Rendering:** Each client uses PDF.js to render pages in a `<canvas>` element.

### User Roles:
- **Admin:** Controls page navigation and can move to the next or previous page.

- **Viewer:** Follows the admin’s navigation, with a viewer message indicating they’re in participant mode.

