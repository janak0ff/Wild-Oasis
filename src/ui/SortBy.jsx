import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams(); // Get the current search params from the URL
  const sortBy = searchParams.get("sortBy") || ""; // Get the current sort option from the search params

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value); // Update the sort option in the search params
    setSearchParams(searchParams); // Update the URL with the new search params
  }
  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onchange={handleChange}
    />
  ); // Use the Select component to render the options
}

export default SortBy;
