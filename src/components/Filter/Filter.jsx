import React from 'react';

import { nanoid } from 'nanoid';
import { Input, Wrapper } from './Filter.styled';
import PropTypes from 'prop-types';

const filterInputId = nanoid();

export default function Filter(filter, onChange){
    return (
      <Wrapper>
        <label htmlFor={filterInputId}>Find contacts by name</label>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
          id={filterInputId}
        />
      </Wrapper>
    );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
