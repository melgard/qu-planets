# QU Planets
This project consists of one angular application that uses Swapi Planets to show items, filter them, paginate, and order by drag and drop.
The project has 90% of testing coverage and includes a Dockerfile so as to get a container with the app running into Nginx and test the app easily.



## Steps to test the app working:


### Test the Application running

1. - 

    The first step to both ways is install all dependencies, for that we will need run ``npm install``

2. -

    if you have docker installed you just need to run ``npm run docker:run`` command and when the process finish
    open the browser ``http://localhost:8080`` and that's it, you will be watching the app running.

    If you don't have docker, no worries, is easy to run locally anyway.
    You will need to run ``npm start`` or ``npm run start`` and then open your browser in ``http://localhost:4200`` and at this 
    moment you will start to watch the application as well.

### Tests

    You can run the tests to verify both, testing and coverage.
    ``npm run test`` or ``npm run test:coverage``
