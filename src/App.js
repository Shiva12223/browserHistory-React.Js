import './App.css'

import {Component} from 'react'

import BrowseHistoryItem from './components/BrowseHistoryItem'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchInput: '', historyListItem: initialHistoryList}

  onDeleteHistoryItem = id => {
    const {historyListItem} = this.state
    const filteredHistoryItems = historyListItem.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({historyListItem: filteredHistoryItems})
  }

  onChangeSearchHistory = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, historyListItem} = this.state
    const searchHistoryResults = historyListItem.filter(eachHistoryItem =>
      eachHistoryItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let browseHistoryResults
    if (searchHistoryResults.length !== 0) {
      browseHistoryResults = (
        <ul className="search-history-container">
          {searchHistoryResults.map(eachItem => (
            <BrowseHistoryItem
              eachHistoryItems={eachItem}
              onDeleteHistoryItem={this.onDeleteHistoryItem}
              key={eachItem.id}
            />
          ))}
        </ul>
      )
    } else {
      browseHistoryResults = (
        <div className="empty-history-container">
          <p>There is no history to show</p>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="nav-container">
          <div className="app-logo-container">
            <img
              className="app-logo"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
          </div>
          <div className="search-container">
            <div className="search-icon-container">
              <img
                className="search-icon"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </div>
            <div className="input-container">
              <input
                className="user-input"
                type="search"
                placeholder="Search History"
                onChange={this.onChangeSearchHistory}
              />
            </div>
          </div>
        </div>
        <div className="container-body">
          <div> {browseHistoryResults} </div>
        </div>
      </div>
    )
  }
}

export default App
