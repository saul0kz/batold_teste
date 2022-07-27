const SearchBar = ({ value, idx, onChange, onChangeSelect }) => {
  return (
    <div>
      {idx}
      <input type="select" defaultValue={value} onChange={onChange} />
      <select name="cars" onChange={onChangeSelect} id="cars">
        <option value="OR">AND</option>
        <option value="OR">OR</option>
        <option value="END">END</option>
        <option value="REM">REM</option>
      </select>
    </div>
  );
};

export default SearchBar;
