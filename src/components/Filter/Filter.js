import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/phonebook/selectors';
import { filterChangeAction } from 'redux/phonebook/actions';



const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onFilterChange = e =>
    dispatch(filterChangeAction(e.target.value));


  return (
    <div className={s.filterWrap}>
      <label className={s.label}>
        Find contact by name
        <input
          type="text"
          name="filter"
          onChange={onFilterChange}
          value={value}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;