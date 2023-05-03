import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    SearchInput: '',
    userDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({SearchInput: event.target.value})
  }

  deleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filtereduserDetailsList = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filtereduserDetailsList})
  }

  render() {
    const {SearchInput, userDetailsList} = this.state
    console.log(SearchInput)
    const searchResult = userDetailsList.filter(eachUser =>
      eachUser.name.includes(SearchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={SearchInput}
        />
        <ul className="list-container">
          {searchResult.map(eachUser => (
            <UserProfile
              deleteUser={this.deleteUser}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
