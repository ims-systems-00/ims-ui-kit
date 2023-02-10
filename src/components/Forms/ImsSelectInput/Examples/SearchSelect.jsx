import ReactSearch from "../ReactSearchBase";

const SearchSelect = () => {
  const loadOptions = (inputValue, callback) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then((response) => response.json())
      .then((json) => {
        const meals = json.meals;
        const options = meals?.map((meal) => {
          return {
            value: meal.idMeal,
            label: meal.strMeal,
          };
        });
        callback(options);
      });
  };
  return (
    <>
      <ReactSearch
        placeholder="Search Select"
        loadOptions={loadOptions}
      />
    </>
  );
};

export default SearchSelect;
