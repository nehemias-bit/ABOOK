# ABOOK 📚 
#### project site:  
[once launched put link here](http://www.traversymedia.com)

## Project Description
**ABOOK** is intened to give the user the ability to create a reading list in a visually appealing web app that they can use to keep track of books they've read and are planning on reading. The user can add a book and as they read it, if they come across something note worthy that they feel they should remember long after the book has ended, they can add memorable notes specific to that book. If the user starts a book but half way through they realize they are not interested in it, they can delete it from their list. The app will help the user track the books they want to read and the books they have already read.

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

## Entity Relational Diagram (ERD

![ERD](https://i.imgur.com/zIoBXzD.png)

<!-- Headings -->
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
<!-- Italics -->
*This text* is italic
_This text_ is italic
<!-- Strong -->
**This text** is bold
__This text__ is bold
<!-- Strikethrough -->
~~This text~~ is strikethrough
<!-- Horizontal Rule -->
---
___
<!-- Blockquote -->
> This is a quote
<!-- Links -->
[Traversy Media](http://www.traversymedia.com)
[Traversy Media](http://www.traversymedia.com "Traversy Media")
<!-- UL -->
* Item 1
* Item 2
* Item 3
  * Nested Item 1
  * Nested Item 2
<!-- OL -->
1. Item 1
1. Item 2
1. Item 3
<!-- Inline Code Block -->
`<p>This is a paragraph</p>`
<!-- Images -->
![Markdown Logo](https://markdown-here.com/img/icon256.png)
<!-- Github Markdown -->
<!-- Code Blocks -->
```bash
  npm install
  npm start
```
```javascript
  function add(num1, num2) {
    return num1 + num2;
  }
```
```python
  def add(num1, num2):
    return num1 + num2
```
<!-- Tables -->
| Name     | Email          |
| -------- | -------------- |
| John Doe | john@gmail.com |
| Jane Doe | jane@gmail.com |
<!-- Task List -->
* [x] Task 1
* [x] Task 2
* [] Task 3