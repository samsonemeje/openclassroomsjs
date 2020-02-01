# openclassroomsjs

After your work on the video streaming website, you are asked to build an app called RestfulReading, which will allow users to keep track of the books they are reading/have read.

Your job is to create the  Book  class, and to populate the development database with three or four books to make sure the interface works properly — you will be working with the provided  Book.js  file.

The  Book  class must have the following fields:

title  -  string  - title of the book
author  -  string  - author of the book
description  -  string  - description of the book
pages  -  number  - total number of pages
currentPage  -  number  - page the user is currently on (between 1 and  pages  )
read  -  boolean  - whether the user has read the book or not (default:  false  )
The  Book  class must also have the following instance method:

readBook(page)
allows the user to say which page they are currently on
if the  page  argument is less than one or more than the total number of pages of the book,  readBook  must return  0
if the  page  argument is greater than or equal to 1 and less than the total number of pages of the book,  readBook  must set the instance's  currentPage  field to the value passed as an argument and return  1
if the  page  argument is equal to the total number of pages of the book,  readBook  must set the instance's  currentPage  field to the value passed as an argument, set the instance's  read  field to  true  , and return  1
Once you have created the  Book  class, you will create at least three valid instances of it and place them inside the exported  books  Array. To check your work, refresh the Codevolve integrated browser: your  Book  instances should be visible in the carousel of the RestfulReading interface.

To test your  readBook  instance method, you must follow these instructions for three books (without refreshing the page):

update the current page with a valid page that is less than the total number of pages
update the current page with the exact total number of pages (the book should disappear from the carousel and appear in the "Read" list)



Open a terminal, navigate to the project folder, and run  npm install  . Once installation is completed, run  npm start  to start the local development server. Your browser should open automatically, but if it does not, open a browser and head to http://localhost:8081.

You can now start adding code to the  Book.js  file, and every time you save your work, the development server should refresh automatically to show your changes.

To shut down the development server, use  Ctrl+C  (you may have to do this twice, depending on your operating system).
