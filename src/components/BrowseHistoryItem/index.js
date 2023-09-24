import './index.css'

const BrowseHistoryItem = props => {
  const {eachHistoryItems, onDeleteHistoryItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachHistoryItems

  const deleteHistoryItem = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="each-historyItem-container">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="domain-logo-container">
        <img alt="domain logo" className="domain-logo" src={logoUrl} />
        <p className="domain-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        className="btn"
        onClick={deleteHistoryItem}
        data-testid="delete"
        type="button"
      >
        <img
          alt="delete"
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default BrowseHistoryItem
