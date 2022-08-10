
const SearchBar = ({searchZoomLogo}) => {

  return (

    <div className="searchbar">
      <input
        type="text"
        placeholder="O que está procurando?"
      />
      <img src={searchZoomLogo} alt="searchZoomLogo" />
    </div>

  )

};

export {SearchBar};