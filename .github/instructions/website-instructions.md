# Spice Life Website Instructions

## Overview
The Spice Life website is a modern, responsive platform designed to showcase the restaurant's offerings, values, and team. It provides users with an immersive experience of the brand's story, menu, and services. The website is built using Next.js, Tailwind CSS, and React components.

## Key Features

### 1. **Hero Section**
   - Displays the restaurant's story and mission.
   - Includes a call-to-action button linking to the menu ordering portal.

### 2. **Menu Section**
   - Features a slidable carousel showcasing the restaurant's menu pages.
   - Users can navigate through menu images using next and previous buttons.

### 3. **Values Section**
   - Highlights the core values of the restaurant, such as authenticity, fresh ingredients, and family tradition.
   - Each value is displayed in a card with an icon, title, and description.

### 4. **Team Section**
   - Introduces the key team members behind the restaurant.
   - Each team member is displayed with a photo, name, role, and bio.

### 5. **Call-to-Action Section**
   - Encourages users to explore locations or catering services.
   - Features animated buttons with smooth scaling effects for an elegant user experience.

### 6. **Navigation Bar**
   - Includes links to key pages: About, Locations, Catering, and Contact.
   - The navbar is styled with a contrasting background and hover effects for better visibility.

## Technical Details

### **Technologies Used**
- **Next.js**: For server-side rendering and routing.
- **Tailwind CSS**: For styling and responsive design.
- **React**: For building reusable components.

### **Folder Structure**
- `app/`: Contains the main pages of the website.
- `components/`: Includes reusable UI components such as buttons, cards, and sections.
- `public/`: Stores static assets like images and logos.
- `styles/`: Contains global CSS and Tailwind configurations.
- `lib/`: Contains utility functions and helpers.
- `hooks/`: Contains custom React hooks.

### **Custom Components**
- `MenuSection`: A carousel component for displaying slidable menu images.
- `MotionSection`: Adds animation effects to sections.
- `SectionHeader`: Displays section titles and subtitles.

### **Custom Hooks and Utilities**
- `use-toast.ts`: A custom hook for managing toast notifications.
- `use-mobile.tsx`: A custom hook for detecting mobile devices.
- `utils.ts`: Contains utility functions for common tasks.

## How to Run the Website
1. Install dependencies:
   ```bash
   yarn install
   ```
2. Build the project:
   ```bash
   yarn build
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```
4. For production:
   ```bash
   yarn start
   ```

## Deployment
The website can be deployed to platforms like Vercel or Netlify. Ensure the `next.config.mjs` file is properly configured for the deployment environment.

## Maintenance
- **Adding New Menu Images**: Place new images in the `public/images/` folder and update the `menuImages` array in `MenuSection`.
- **Updating Team Members**: Modify the team data array in the `Team Section` of the `About` page.
- **Styling Changes**: Use Tailwind CSS classes for quick and consistent updates.

## Notes
- Ensure all images are optimized for web to maintain performance.
- Follow the existing coding standards and use reusable components wherever possible.

For further assistance, refer to the codebase or contact the development team.
