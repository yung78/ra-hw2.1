import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import data from './data';

export default class Portfolio extends React.Component {
  constructor() {
    super()
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.state = {selected: 'All'};
    this.data = data;
  }

  render() {
    return (
      <div className='container'>
        <div className='toolbar'>
          <Toolbar
            filters = { this.filters }
            selected = { this.state.selected }
            onSelectFilter={(filter) => {
              this.setState({selected: filter});
              console.log(filter);
              }}/>
        </div>
        <div className = 'project_list'>
          <ProjectList projects = {
            this.data.filter((el) => (el.category === this.state.selected)).length
              ? this.data.filter((el) => (el.category === this.state.selected))
              : this.data
            }/>
        </div>
      </div>
    )
  }
}