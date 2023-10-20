const Toolbar = ({ filters, selected, onSelectFilter }) => {

  const handleClick = (filter) => {
    onSelectFilter(filter);
  }

  return filters.map((filter, index) => (
    <button key={ index } onClick={ () => handleClick(filter) } className={'btn'}>{ filter }</button>
  ));
};

export default Toolbar;
