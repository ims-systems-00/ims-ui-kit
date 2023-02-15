/*eslint-disable*/
import classnames from "classnames";
import React from "react";
import {
  useExpanded,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useSortBy,
  useTable,
} from "react-table";
import FilterAndSearch from "./FilterAndSearch";
import Pagination from "./Pagination";
function Table({
  columns,
  data,
  renderRowSubComponent,
  rowProps = () => ({}),
  className = "-highlight -striped ",
  handleSearch = () => {},
  handleFilter = () => {},
  handlePagination = () => {},
  filters = [],
  pagination = {
    currentPage: 1,
    hasNextPage: true,
    hasPrevPage: false,
    nextPage: 2,
    prevPage: null,
    size: 10,
    totalPages: 2,
    totalResults: 17,
  },
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { expanded },
    visibleColumns,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10, pageIndex: 0 },
    },
    useSortBy,
    useExpanded,
    usePagination,
    useResizeColumns,
    useFlexLayout
  );
  return (
    <>
      <div className={"ReactTable " + className}>
        <div className="pagination-top">
          <FilterAndSearch
            filters={filters}
            onFilter={(filter) => handleFilter(filter)}
            onSearch={(search) => handleSearch(search)}
          />
        </div>
        <table {...getTableProps()} className="rt-table">
          <thead className="rt-thead -header">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="rt-tr">
                {headerGroup.headers.map((column, key) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={classnames("rt-th rt-resizable-header", {
                      "-cursor-pointer": headerGroup.headers.length - 1 !== key,
                      "-sort-asc": column.isSorted && !column.isSortedDesc,
                      "-sort-desc": column.isSorted && column.isSortedDesc,
                    })}
                  >
                    <div className="rt-resizable-header-content">
                      {column.render("Header")}
                      <div
                        {...column.getResizerProps()}
                        className={classnames("col-resizer", {
                          " active": column.isResizing,
                        })}
                      />
                    </div>
                    <div>
                      {headerGroup.headers.length - 1 === key
                        ? null
                        : column.canFilter
                        ? column.render("Filter")
                        : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="rt-tbody">
            {page.map((row, i) => {
              prepareRow(row);
              const rowStyel = classnames(
                "rt-tr",
                { " -odd": i % 2 === 0 },
                { " -even": i % 2 === 1 }
              );
              return (
                <React.Fragment key={row.getRowProps()?.key}>
                  <tr
                    /**
                     * in the follwing we are muting row object and putting classNames
                     * this is a custom property added to get control from outside
                     */
                    className={rowStyel}
                    {...row.getRowProps(
                      rowProps({
                        ...row,
                        className: rowStyel,
                      })
                    )}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()} className="rt-td">
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                  {row.isExpanded ? (
                    <tr>
                      <td colSpan={visibleColumns.length}>
                        {renderRowSubComponent &&
                          renderRowSubComponent({ row })}
                      </td>
                    </tr>
                  ) : null}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
        <div className="pagination-bottom">
          <div className="-pagination">
            <div className="-center flex-nowrap">
              <Pagination
                className="pagination-bar"
                pagination={pagination}
                currentPage={pagination.currentPage}
                totalCount={pagination.totalResults}
                pageSize={pagination.size}
                onPageChange={(page) => {
                  handlePagination({ page });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
