/**
 * Table Component Module
 *
 * A flexible, accessible table component built with styled-components and React Context API.
 * Provides structured table components with proper ARIA roles and customizable styling.
 */

import { createContext, useContext } from "react";
import styled from "styled-components";

// Create context for table configuration
const TableContext = createContext();

/**
 * Styled Components
 *
 * Using CSS-in-JS for component-level styling with styled-components
 */

// Base table container with table role for accessibility
const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

// Common row styles for header and body rows
const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

// Table header row group with styling
const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

// Table body row styling
const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

// Table body container with rowgroup role
const StyledBody = styled.div`
  margin: 0.4rem 0;
`;

// Footer container with conditional rendering
const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

// Empty state message component
const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

/**
 * Table Component
 *
 * @param {string} columns - CSS grid template columns definition
 * @param {ReactNode} children - Child components (Header, Body, Footer)
 */
function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

/**
 * Table Header Component
 *
 * @param {ReactNode} children - Header cells
 */
function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div role="rowgroup">
      <StyledHeader role="row" columns={columns}>
        {children}
      </StyledHeader>
    </div>
  );
}

/**
 * Table Row Component
 *
 * @param {ReactNode} children - Row cells
 */
function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

/**
 * Table Body Component
 *
 * @param {Array} data - Array of data items to render
 * @param {Function} render - Render prop for row rendering
 */
function Body({ data, render }) {
  if (!data?.length)
    return <Empty role="alert">No data to show at the moment</Empty>;

  return <StyledBody role="rowgroup">{data.map(render)}</StyledBody>;
}

// Compose Table component with sub-components
Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
