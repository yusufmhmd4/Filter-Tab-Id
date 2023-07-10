import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeActiveId, isActive} = props
  const {tabId, displayText} = tabDetails
  const isActiveBUtton = isActive ? 'active-tab-btn' : ''
  console.log(isActive)
  const changeTabId = () => {
    onChangeActiveId(tabId)
  }

  return (
    <li className="tab-item-container " onClick={changeTabId}>
      <button type="button" className={`tab-btn ${isActiveBUtton}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
