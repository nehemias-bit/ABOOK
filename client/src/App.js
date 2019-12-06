import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import './App.css';
import { registerUser } from './services/api-helper';
import { loginUser } from './services/api-helper';
import { createBook } from './services/api-helper';
import { verifyUser } from './services/api-helper';
import { showAllBooks } from './services/api-helper';
import { deleteBook } from './services/api-helper';
import { createNotes } from './services/api-helper';
import { getOneBook } from './services/api-helper';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import LoggedOutHeader from './components/LoggedOutHeader';
import CreateBook from './components/CreateBook';
import IndividualBook from './components/IndividualBook';
import CreateNotes from './components/CreateNotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authFormData: {
        username: "",
        user_img: "",
        password: ""
      },
      loginForm: {
        username: "",
        password: ""
      },
      currentUser: null,
      bookForm: {
        book_cover: "",
        author_name: "",
        book_title: "",
        user_id: ""
      },
      newBook: [],
      noteForm: {
        note: ""
      },
      notes: [],
      currentBook: null
    }
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
    return currentUser
  }

  async componentDidMount() {
    await this.handleVerify();
    if (this.state.currentUser) {
      const allBooks = await showAllBooks();
      this.setState({
        newBook: allBooks
      })
    } else {
      this.props.history.push("/login")
    }


  }

  getCurrentBook = async (id) => {
    const theBook = await getOneBook(id);
    this.setState({
      currentBook: theBook
    })
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }))
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData)
    this.setState({
      currentUser
    })
  }

  loginSubmit = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser(this.state.loginForm);
    this.setState(prevState => ({
      currentUser,
      bookForm: {
        ...prevState.bookForm,
        user_id: currentUser.id
      }
    }))
    this.props.history.push("/")
  }

  handleLoginChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      loginForm: {
        ...prevState.loginForm,
        [name]: value
      }
    }))
  }

  handleBookCreateChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      bookForm: {
        ...prevState.bookForm,
        [name]: value
      }
    }))
  }

  bookCreateSubmit = async (e) => {
    e.preventDefault();
    let book = await createBook(this.state.bookForm);
    this.setState(prevState => ({
      newBook: [book, ...prevState.newBook]
    }))
    this.props.history.push("/")
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  deleteTheBook = async (id) => {
    await deleteBook(id);
    this.setState(prevState => ({
      newBook: prevState.newBook.filter(book => {
        return book.id !== id
      })
    }))
    this.props.history.push("/")
  }

  handleNoteCreateChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      noteForm: {
        ...prevState.noteForm,
        [name]: value
      }
    }))
  }

  createNotesSubmit = async (e) => {
    e.preventDefault();
    const id = this.state.currentBook
    console.log("submitting new note");
    console.log(this.state.currentBook);
    console.log(this.state.noteForm);
    let note = await createNotes(id, this.state.noteForm);
    this.setState(prevState => ({
      notes: [note, ...prevState.notes]
    }))
    this.props.history.push("/books/:id")
  }


  render() {
    return (
      <div className="app">
        {
          !this.state.currentUser &&
          <>
            <LoggedOutHeader />
            <Route path="/login" render={() => (<Login handleLoginChange={this.handleLoginChange} loginSubmit={this.loginSubmit} />)} />
            <Route path="/register" render={() => (<Register authFormData={this.state.authFormdata} handleChange={this.handleChange} handleRegister={this.handleRegister} />)} />
          </>
        }



        {this.state.currentUser &&
          <>
            <Route exact path="/"
              render={(props) => (
                <HomePage
                  newBook={this.state.newBook}
                  handleLogout={this.handleLogout} currentUser={this.state.currentUser} />)} />

            <Route exact path="/add-book/:id" render={(props) => (
              <CreateBook
                currentUser={this.state.currentUser}
                handleBookCreateChange={this.handleBookCreateChange}
                bookCreateSubmit={this.bookCreateSubmit}
                bookForm={this.state.bookForm} handleLogout={this.handleLogout}
                id={props.match.params.id} />)} />

            <Route exact path="/books/:id" render={(props) => (<IndividualBook id={props.match.params.id} handleLogout={this.handleLogout} deleteTheBook={this.deleteTheBook} handleNoteCreateChange={this.handleNoteCreateChange} createNotesSubmit={this.createNotesSubmit} getCurrentBook={this.getCurrentBook} currentBook={this.state.currentBook} />)} />

            <Route path="/add-notes/:id" render={(props) => (<CreateNotes noteForm={this.state.noteForm} id={props.match.params.id} createNotesSubmit={this.createNotesSubmit} handleNoteCreateChange={this.handleNoteCreateChange} />)} />
          </>
        }



      </div>
    );
  }
}

export default withRouter(App);
