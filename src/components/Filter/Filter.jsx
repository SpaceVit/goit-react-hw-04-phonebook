import PropTypes from 'prop-types';
import { FilterContainer, FilterInput } from './Filter.styled';

export default function Filter({ value, onChange }) {
  return (
    <FilterContainer>
      Filter
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
