import './index.css'

const VisitedCountriesList = props => {
  const {visitedCountryDetails, onClickRemoveBtn} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onClickButton = () => {
    onClickRemoveBtn(id)
  }

  return (
    <li className="visited-list">
      <img src={imageUrl} className="image" alt="thumbnail" />
      <div className="country-container">
        <p className="country-name">{name}</p>
        <button className="remove-btn" type="button" onClick={onClickButton}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountriesList
