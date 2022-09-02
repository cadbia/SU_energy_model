# SU_energy_model
South campus data visualization

To make edits to this repository begin by making your own copy by forking the project. You can fork this repository by hitting the fork button in the top-right of this page. 

Then clone the repository in your preferred IDE. Cloning the repository will link your editor to the repository. See the tutorial below for help. 

https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

Now you will be able to use the CLI to push your code to your repository. This looks something like this: 

git add .
git commit -a -m "commit message" (do not need commit message either, although helpful)
git push

Below is an explanation of how each file contributes to the overall website. 

index.html

--> Contains the structure of the webpage

--> Responsible for the initial state of the webpage

--> Contains Buttons, images, and SVG paths. Also contains links to stylesheet and JavaScript files 

script.js

--> Responsible for making the site responsive

--> Functions are pointed to and executed by event listeners in HTML code or JS code

--> Code can dynamically change the color, size, visibility, etc. of HTML elements

style.css

--> Responsible for initial style of elements withing HTML page

--> Styling attributes can include color, size, visibility, etc.

--> Class and id are used to select which HTML elements are being styled 


composer.json and index.php

--> signal that this site should be hosted as a PHP project

--> This is required because this site does not contain a backend
 
--> These files DO NOT need to be edited

This website can be easily hosted on Heroku when you are satisfied with your local changes and wish to push them to a public link.

Please follow this tutorial to link cloned repository to a Heroku server.  

https://devcenter.heroku.com/articles/github-integration. 
