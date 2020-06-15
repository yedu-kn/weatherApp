This is a simple live weather application to know the current weather of any city. This is my first react app and I done this to get familiar with the use of API.

This app fetches data from https://openweathermap.org/ which provide live weather of around 2,00,000 cities around the globe.

The UI of the app is inspired from a tutorial by Daily Tution (https://www.youtube.com/watch?v=IxuqmfO6p28)

But I depended a tutorial by Hmaza Mizra (https://www.youtube.com/watch?v=204C9yNeOYI) for the codes to get a kick start. Honestly, this is a wonderful tutorial for a beginner to start with API in react.

## Additional things I've added to the project,

1. The icons were not fully dynamic in the tutorial by Daily Tution. For example, if the weather is clear sky, the app shows a sun irrespective of day or night instead of showing a moon in the night. This was little annoying to me and thus I changed it to fully responsible by checking the current time from api to the sunrise and sunset time. The API gives the last weather updated time, sunrise time and sunset time in UTC and timezone in seconds. Even if the time is obtained as UTC, it automatically converts to the browser time zone when it is called by built in javascript time function. So we need to convert it again to utc and then to shift with dezired timezone.)

2. Since I've all the data (weather description, day/night) I decided to add an interesting feature to the app. The app will change the background image automatically by checking the weather and day/night.

3. By doing these I've already implemented a function to convert the recieved time to time of the entered city. So I also displayed the current time in the app just below the city name. This helps to know the current time of any city in the world along with the weather.

icon pack used: https://github.com/erikflowers/weather-icons

Special thanks to https://github.com/aneagoie who taught me all these from basic HTML (https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/).

And that's all about my first web app and I'm satisfied with my work. If anybody think any feature of this project can be done in a better and more simpler way, let me know at yedukn@gmail.com



## The following is the default read me file from create-react-app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
