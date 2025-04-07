import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperation from "../features/cabins/CabinTableOperation";

/**
 * Cabins
 * ======
 *
 * This component renders the page for showing all cabins.
 *
 * It renders a heading with the title "All cabins", a paragraph for
 * filtering and sorting, a table for showing the cabins and a button
 * for adding a new cabin.
 *
 * @returns {React.ReactElement} The JSX element for the page.
 */
function Cabins() {
  return (
    <>
      {/* The heading and paragraph for filtering and sorting */}
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperation />
      </Row>

      {/* The table for showing the cabins */}
      <Row>
        <CabinTable />
      </Row>

      {/* The button for adding a new cabin */}
      <AddCabin />
    </>
  );
}

export default Cabins;
