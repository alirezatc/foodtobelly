This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




## Technical Questions
1. I spent 6 hours to develop this project. Jest is recommended for testing.
2. I believe the greatest feature of React is having a Virtual DOM and only updating components when they get updated. You can review my article about great features of React and its comparison with Angular: https://www.linkedin.com/pulse/react-vs-angular-which-one-right-decision-your-front-end-tayari/ 
3. If I bump into a slow performance in the software the first thing I would check is network tab of the browswer to see if any requests takes more than usual time. However, performance testing is a comprehensive topic and should be considered in the Unit Testing. Some of the things to consider are: Load testing, Stress testing, Soak testing, Spike testing, Breakpoint testing, Configuration testing, Isolation testing, Internet testing. Plus, for the Front End, I use reports from Gtmetrix and Pingdom tools.
4. If I wanted to revise the JSON, I would double check the image_url, put the city, state, area, and country inside another object called location or address. Also, I would suggest we add the restaurant_type to the API.
5. 
```json
[
  {
    "_id": 130000,
    "name": "Alireza Tayari",
    "gender": "Male",
    "company": "SLG",
    "email": "ali***@gmail.com",
    "phone": "+1 604-*****65",
    "title": "Front End Developer",
    "location": {
      "address": "2712 Broadway St",
      "postalCode": "CA 94115",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "Twitter",
        "username": "john",
        "url": "http://twitter.com/john"
      }
    ],
    "tags": [
      "Front End Development",
      "UI Development",
      "UI/UX Design"
    ],
    "key skills": ["HTML5", "CSS3", "Bootstrap", "ES6", "JavaScript", "React", "MVC", "jQuery", "AngularJS", "wordpress", "GIT", "TFS", "Piwik", "project management", "YouTrack", "responsive web design", "mobile first"],
    "working experience": [
      {
        "company_id": "001",
        "company_name": "SLG",
        "position": "React Developer",
        "start_date": "2020-01-12",
        "end_date": "",
        "currently_working": "true",
        "job_description": [
          "description 1",
          "description 2",
          "description 3"
        ]
      },
      {
        "company_id": "002",
        "company_name": "Jame Jam",
        "position": "Front End Developer",
        "start_date": "2012-03-01",
        "end_date": "2018-03-01",
        "currently_working": "false",
        "job_description": [
          "description 1",
          "description 2",
          "description 3"
        ]
      }
    ],
    "education": [
      {
        "institution": "University Canada West",
        "area": "Master of Business Admnistration",
        "study_type": "Masters",
        "start_date": "2018-03-01",
        "end_date": "2019-07-01",
        "gpa": "3.67",
        "courses": [
          "IT for Managers", "Strategic Management"
        ]
      }
    ],
    "friends": [
      {
        "id": 126478,
        "name": "Iman"
      },
      {
        "id": 126479,
        "name": "Kas"
      }
    ],
    "greeting": "Hello, welcome to Alireza Tayari json world!",
    "favorite fruit": "strawberry"
  }
]
```
