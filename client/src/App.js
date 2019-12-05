import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import './App.css';
import { registerUser, updateBook } from './services/api-helper';
import { loginUser } from './services/api-helper';
import { createBook } from './services/api-helper';
import { verifyUser } from './services/api-helper';
import { showAllBooks } from './services/api-helper';
import { deleteBook } from './services/api-helper';
import { upateBook } from './services/api-helper';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import LoggedOutHeader from './components/LoggedOutHeader';
import CreateBook from './components/CreateBook';
import IndividualBook from './components/IndividualBook';

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
        notes: "",
        user_id: ""
      },
      newBook: []
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

  updateBookContent = async (id, data) => {
    const updating = await updateBook(id, data);
    this.setState(prevState => ({
      newBook:
        prevState.newBook[id] === updating.id ? updating : this.state.newBook

    }))

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

            <Route exact path="/books/:id" render={(props) => (<IndividualBook id={props.match.params.id} handleLogout={this.handleLogout} deleteTheBook={this.deleteTheBook} handleBookCreateChange={this.handleBookCreateChange} updateBookContent={this.updateBookContent} bookForm={this.state.bookForm} />)}/>
          </>
        }



      </div>
    );
  }
}

export default withRouter(App);
