const Toolbar = ({filters , selected, onSelectFilter}) => {
  return (
    <div className="toolbar">
      <div className="filters">
        {filters.map((filter, index) => {
          return <button 
            key={index}
            type='button'
            className={`filter-btn ${selected === filter ? 'filter-btn-selected' : ''}`}
            onClick={onSelectFilter}
            >
            {filter}
          </button>
        })}
      </div>
    </div>
  )
}

export default Toolbar;