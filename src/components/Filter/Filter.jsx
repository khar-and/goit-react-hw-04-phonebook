import React from 'react';
import PropTypes from 'prop-types';
import { Div, Input, Label } from './Filter.styled';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <Div>
      <Label>
        Find contacts by Name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </Div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
