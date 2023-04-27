import { nanoid } from 'nanoid';
import CSS from './Filter.module.css';

const Filter = ({ onFilterChange }) => {
  const ID = nanoid(5);

  return (
    <div className={CSS.filter}>
      <label htmlFor={ID} className={CSS.userForm__label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id={ID}
        className={CSS.filterInput}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filter;
