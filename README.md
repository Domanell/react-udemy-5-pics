# Pics Search App

This is a simple React application that allows users to search for images using the Unsplash API. The project demonstrates core React concepts including state management, component composition, and API integration.

## Features

- **Image Search:** Enter a search term to fetch and display images from Unsplash.
- **Responsive UI:** Images are displayed in a flexible, wrapping grid.
- **Component-based Structure:** Includes reusable components for search and image display.

## Project Structure

```
src/
	api.js            # Unsplash API integration
	App.js            # Main app component
	index.js          # Entry point
	components/
		SearchBar.js    # Search input component
		ImageList.js    # Image grid component
		ImageShow.js    # Individual image display
		ImageList.css   # Styles for image grid
```

## How It Works

1. **SearchBar**: User enters a term and submits the form.
2. **App**: Handles the search, calls Unsplash API via `searchImages` in `api.js`, and stores results in state.
3. **ImageList**: Receives images array and renders a grid of `ImageShow` components.
4. **ImageShow**: Displays each image with its description.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

Removes the single build dependency from your project.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

---

**API Key Notice:**
This project uses a demo Unsplash API key in `src/api.js`. For production use, you should replace it with your own key from [Unsplash Developer](https://unsplash.com/developers).
