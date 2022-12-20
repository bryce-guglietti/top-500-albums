# Rolling Stone Top 500 Albums
Visit the Website at: https://rollingstonetop500.netlify.app/

## About

This application uses React to show the top 500 albums ranked by Rolling Stone Magazine.

The top 500 albums were stored in a JSON file called "albums.json" and then displayed using an AlbumCard.

AlbumCards are called for each album in the data array.

The AlbumCard is displayed on the Home Page and shows the Rank, the Title, and the Artist.

Each AlbumCard is able to be clicked. When clicked the AlbumCard opens a new Tab and shows the Wikipedia of the Album.


## What was used

The application uses React for the User Interface. The application uses JSX, CSS, JavaScript, Tailwind and JSON files to achieve the final result.

Common CSS practices are used to display the albums as well as Tailwind.

Tailwind was used for the AlbumCard as well as on the Home Page to display albums in a grid.

Tailwind allows for simple adjustments to be made quickly and easily.

The React file structure is simple. Inside the src folder there is a components folder containing the AlbumCard.jsx file,
a NavBar folder containing the Navbar.jsx file,
and a Pages folder containing the two pages in the application.


## Pages

The application has a Home Page, A Stats Page, and an About Page.

The Home Page simply holds all the albums and relevant data.

The Stats Page holds simple statistics about the data including Artists holding the most albums in the top 500.

The About Page will hold all information regarding the application and how to use it.




## Notes:

Currently the Navigation Bar is not complete. It has not been implemented as of yet.

The About page is not complete yet and will show all necessary information when completed.

Future updates will have a search field and a sorting field to enhance the user experience.

## How to Run on LocalHost
Pull the code, open a terminal (in VSCode for example), cd into the top-500-albums folder and run commmand npm start.
