function SearchBar({ value, onSearch }) {
  return (
    <div className="search">
      <input value={value} onChange={onSearch} className="form-control" type="search" placeholder="Buscar..." />
    </div>
  );
}

export default SearchBar;
