import React, { Component } from 'react';

import { nanoid } from 'nanoid';
import { Input, Wrapper } from './Filter.styled';
import PropTypes from 'prop-types';

const filterInputId = nanoid();
// filter, onChange
class Filter extends Component {
  render() {
    return (
      <Wrapper>
        <label htmlFor={filterInputId}>Find contacts by name</label>
        <Input
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.onChange}
          id={filterInputId}
        />
      </Wrapper>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
