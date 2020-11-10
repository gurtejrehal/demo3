# Angular Project on HttpClient Request

In this Project, I create a weather app using Angular, Bootstrap, and the APIXU API. Here , we can type a location into a search bar and on submission of that, see the current weather details for that location displayed in our app. The Angular version used in this project is 10.1.6 and the Bootstrap version used is 4.5.3.


## APIXU

It provides global weather data to users via their API. Using APIXU, a user can retrieve the latest weather as well as future weather forecasts for any location in the world.


## Step 1 — Installing Angular

For creating this app, we need to install Angular. Open terminal and run the following command to install the Angular CLI globally on local machine:
`npm install -g @angular/cli`


## Step 2 — Creating Angular App

Creating a new application, named httpApp.
`ng new httpApp`
In terminal, move to the root httpApp:
`cd httpApp`
Then execute the following command to install bootstrap and save the references to the package.json file:
`npm install --save bootstrap`
Now, start the application with the ng serve command to check that everything is working correctly.run:
`ng serve`


## Step 3 — Defining the User Interface

Open src/app/app.component.html to access HTML code. Delete the content that is currently in the file, and then add the required code:

I created a <div> with class container to hold all content,which into two sections of six columns each. The left-hand side will hold search form and the right, the weather data.

In first half, I also add a button that will submit what you’ve typed search input to APIXU, which will then return the requested weather details.


## Step 4 — Connecting the Button

I used [(ngModel)] for two way databinding, for which I import FormModule in app.module.ts. With the help of       [(ngModel)], location variable is used to access the search input data in app.component.ts. When the search button is clicked, the getWeather() method of app.component.ts called.


## Step 5 — Creating a servive

Create a service named GetWeatherService , which make the http get response to our API. For this I import HttpClient in get-weather.service.ts and HttpClientModule in app.module.ts.


## Step 6 — Displaying Weather Data in Your App

After getting response from httpClient , we will subscribe it inside the method of app.component.ts and store the JSON data in a variable named weatherData. And then it is used in app.component.html to access the required values from it and display in weather detail.
