# Random User Generator - Angular Application

A simple Angular application that fetches and displays a random user from the [Random User API](https://randomuser.me/api/) when a button is clicked.

## Features

- **Fetch Random User**: Click the "Fetch Random User" button to get a random user
- **Display User Information**: Shows user's name, email, phone, location, and profile picture
- **Loading State**: Button shows loading state while fetching data
- **Error Handling**: Displays error messages if the API request fails
- **Responsive Design**: Clean, modern UI with gradient styling
- **Smooth Animations**: Card slides in when user data is loaded

## Project Structure

```
random-user-app/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── user.service.ts          # Service to fetch user data from API
│   │   ├── app.component.ts             # Main application component
│   │   ├── app.component.html           # Component template
│   │   └── app.component.css            # Component styles
│   ├── main.ts                          # Application entry point
│   ├── index.html                       # HTML template
│   └── styles.css                       # Global styles
├── angular.json                         # Angular CLI configuration
├── tsconfig.json                        # TypeScript configuration
├── package.json                         # Project dependencies
└── README.md                            # This file
```

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/` in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```

## How It Works

### AppComponent
- Main component that handles the UI and user interactions
- Displays the fetched user data
- Manages loading and error states
- Calls the UserService to fetch data when button is clicked

### UserService
- Service that makes HTTP requests to the Random User API
- Returns an Observable with user data
- Handles API communication centrally

### API Integration
The application uses the Random User API endpoint:
```
https://randomuser.me/api/
```

This endpoint returns random user data with the following information:
- Name (first and last)
- Email
- Phone number
- Location (city, state, country)
- Profile pictures (medium and large)

## Technologies Used

- **Angular 18**: Modern frontend framework
- **TypeScript**: Typed JavaScript
- **RxJS**: Reactive programming with Observables
- **HttpClient**: For making HTTP requests
- **CSS**: For styling and animations

## Features Explained

### Button Interaction
- Click the "Fetch Random User" button to load a new user
- Button is disabled during loading to prevent multiple requests
- Button text changes to "Loading..." while fetching

### User Card Display
- Shows user's profile picture in a circular format
- Displays user's full name
- Shows email, phone, and location information
- Animated slide-in effect when data loads

### Error Handling
- If the API request fails, an error message is displayed
- Error message includes user-friendly text

## Notes

- The application uses standalone components (Angular 14+)
- No modules required for this simple application
- Uses Angular's built-in `provideHttpClient()` for HTTP configuration
- CSS features gradient backgrounds and smooth animations

## Browser Compatibility

Works on all modern browsers that support:
- ES2022 JavaScript
- CSS Grid/Flexbox
- CSS Animations

## Future Enhancements

- Add filters to fetch users from specific countries
- Add ability to fetch multiple users at once
- Save favorite users
- Add user search functionality
- Integrate with additional user data APIs
