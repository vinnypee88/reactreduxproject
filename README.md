# Reddit Client Project

This is a front end project incorporating react and redux technologies. 

## Description

The application will allow users to view and search posts and comments provided by the API. I have chosen a sport theme so users can 
browse posts filtered by sport categories.

## Current Work 

First draft has been published on Netflify. https://inspiring-ritchie-c27ab1.netlify.app/

* Font-sizes need adjusting on the mobile devices. 
* Hover effects on mobile devices need to be changed to onclick. 
* Currently posts with external links or no media show up as an unloaded page. Need to fnd a way to filter these posts from 
the API response.

## Future Work 

* Create a loading screen to display when the Application is fetching data from the Reddit API
* Write tests for the application. 

## Previous Work 

15..Jun.2021
Initial setup is complete with the header, searchbar, main and aside all with visually pleasing spacing between them.
The main and aside were implemented as HTML and not as react components as the requirements are not currently there. 

* Create a Post component of which multiple will be rendered in the main section
* Use Mock data to style the component 
* fetch data from the RedditAPI and observe the data format and the key information that could be extracted to present to users.
* Build a redux store to manage the state data retrieved from the reddit API.
* Nav will have predifined topics that users will be able to effortlessly navigate to. 
* Add animations to the site to create the best user experience.

7.Jun.2021
The initial phase will involve creating the parent components that will render the header, main body and the nav. 
Due to the simplicity of the page, a digital wireframe will not be created for particular project at this time. 
* Create header Component
* Create main body component
* Create the nav component. 
* Make the page responsive using CSS. 

## Testing 
At this stage, this project will not be test driven.
Tests will be written at a later stage

## Author
Vinod Patel

## Licensing
Coming soon.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

