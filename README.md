# ABOOK 📚 
#### project site:  
[abook](http://abook.surge.sh/login)

## Project Description
**ABOOK** is intened to give the user the ability to create a reading list in a visually appealing web app that they can use to keep track of books they've read and are planning on reading. The user can add a book and as they read it, if they come across something note worthy that they feel they should remember long after the book has ended, they can add memorable notes specific to that book. If the user starts a book but half way through they realize they are not interested in it, they can delete it from their list. The app will help the user track the books they want to read and the books they have already read.

## Major challenges(anticipated)
I forsee the overall RESTful logic of this app being the most difficult part of this project.


## MVP
My MVP goals for this project are:

**1)** A JSON API created with Ruby on Rails that incorporates:

* RESTful JSON endpoints using Active Record to allow front-end/ back-end communication  
* Auth using bcrypt and JSON Web Token.
* Three data tables including:
  * The User table which has a one to many   relationship with the Book table.
  * The Book table includes the unique notes column among other things specified in the ERD below.
  * The Image table which includes images of memorable places in the book and it has a one to many relationship with the Book table.


**2)** A React front end that consumes the API.

**3)** All four CRUD operations present.

**4)** A visually appealing styled app.

**5)** App will be deployed using Heroku and surge.

## Post MVP
**1)** The user should have the ability to share their list or individual books from their list with other users.

**2)** The user should be able to click on an authors name and view other books by that author.

## Entity Relational Diagram (ERD)

![ERD](https://i.imgur.com/QEzb6fK.png)

## Wireframe
![ERD](https://i.imgur.com/rppMI6g.png)
![ERD](https://i.imgur.com/ysYh8gg.png)
![ERD](https://i.imgur.com/aotjvoo.png)
![ERD](https://i.imgur.com/8ahkY1n.png)
![ERD](https://i.imgur.com/mkn6xzt.png)
![ERD](https://i.imgur.com/E2JTaVB.png)


## Component Heirarchy

* < LoggedOutHeader />
* < Login />
* < Rgister />
* < LoggedInHeader />
* < EditUser />
* < HomePage />
* < CreateBook />
* < FinishedReading />
* < IndividualBook />
* < UpdateBook />
* < CreateNotes />
* < Footer />





