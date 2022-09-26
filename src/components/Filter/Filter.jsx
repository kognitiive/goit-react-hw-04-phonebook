import { nanoid } from 'nanoid';
import { Input, Wrapper } from './Filter.styled';
const filterInputId = nanoid();

const Filter = ({ state, onChange }) => {
  const { filter } = state;
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
};

export default Filter;
