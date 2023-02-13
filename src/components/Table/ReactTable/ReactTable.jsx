/*eslint-disable*/
import classnames from "classnames";
import React, { useEffect, useState } from "react";
import {
  useExpanded,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useSortBy,
  useTable,
} from "react-table";
// import { imsLogger } from "services/loggerService";
import ActionsDropdown from "./ActionsDropdown";
// import FilterAndSearch from "./FilterAndSearch";
import Pagination from "./Pagination";
function Table({
  columns,
  data,
  // hasBulkActions = false,
  activateView = () => {},
  getSelectedCheckbox = () => {},
  renderRowSubComponent,
  className,
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
    size: 0,
    totalPages: 2,
    totalResults: 0,
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
      initialState: { pageSize: 100, pageIndex: 0 },
    },
    useSortBy,
    useExpanded,
    usePagination,
    useResizeColumns,
    useFlexLayout
  );
  // imsLogger(page, "page"); //page.original === data
  const [bulkDropdownOpen, setBulkDropdownOpen] = useState(false);
  const toggle = () => setBulkDropdownOpen((prevState) => !prevState);
  const toggleOff = () => setBulkDropdownOpen(false);
  const [allChecked, setAllChecked] = useState(false);
  const [checkedIds, setCheckedIds] = useState([]);
  const [singleChecked, setSingleChecked] = useState([]);
  const handleOnCheck = (position) => {
    const updatedCheckedState = singleChecked?.map((item, index) =>
      index === position ? !item : item
    );
    setSingleChecked(updatedCheckedState);

    if (updatedCheckedState.every(Boolean)) {
      setAllChecked(true);
    }

    //if any of the checkbox is unchecked then uncheck the select all checkbox
    if (updatedCheckedState.includes(false)) {
      setAllChecked(false);
    }
  };

  const handleAllChecked = (event) => {
    if (event.target.checked) {
      setSingleChecked(singleChecked.fill(true));
      setAllChecked(true);
    }
    if (event.target.checked === false) {
      setSingleChecked(singleChecked.fill(false));
      setAllChecked(false);
    }
  };
  useEffect(() => {
    setSingleChecked(new Array(page.length).fill(false));
    setAllChecked(false);
  }, [pagination]);

  if (singleChecked.some((item) => item === true)) {
    getSelectedCheckbox(true);
  } else {
    getSelectedCheckbox(false);
  }

  return (
    <div className="ims-table-1">
      <div className={"ReactTable " + className}>
        <div className="pagination-top">
          {/* <FilterAndSearch
            toggle={toggle}
            toggleOff={toggleOff}
            hasBulkActions={hasBulkActions}
            filters={filters}
            onFilter={(filter) => handleFilter(filter)}
            onSearch={(search) => handleSearch(search)}
            checkedIds={checkedIds}
          /> */}
        </div>
        <div className="outer">
          <div className="inner">
            <table {...getTableProps()} className="rt-table">
              <thead className="rt-thead -header">
                {headerGroups?.map((headerGroup, i) => (
                  <tr {...headerGroup.getHeaderGroupProps()} className="rt-tr">
                    {/* Make checkbox */}
                    {/* {hasBulkActions && (
                      <th className="first-col">
                        <input
                          // className="table-header-input"
                          onChange={(e) => {
                            handleAllChecked(e);
                            if (e.target.checked) {
                              setCheckedIds(
                                page?.map((item) => item.original.id)
                              );
                            } else if (e.target.checked === false) {
                              setCheckedIds([]);
                            }
                          }}
                          checked={allChecked}
                          type="checkbox"
                          name=""
                          id=""
                        />
                      </th>
                    )} */}
                    {headerGroup.headers?.map((column, key) => (
                      <th
                        key={key}
                        {...(headerGroup.headers.length - 1 !== key &&
                          column.getHeaderProps(
                            // headerGroup.headers.length - 1 !== key && headerGroup.headers[0].id !== "checkbox" &&
                            column.getSortByToggleProps()
                          ))}
                        className={classnames("rt-th rt-resizable-header", {
                          "-cursor-pointer":
                            headerGroup.headers.length - 1 !== key,
                          "-sort-asc": column.isSorted && !column.isSortedDesc,
                          "-sort-desc": column.isSorted && column.isSortedDesc,
                          // "td-margin": key === 0 && hasBulkActions,
                          "last-col": key === headerGroup.headers.length - 1,
                          "second-last-col":
                            key === headerGroup.headers.length - 2,
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
                {/* <tr
                  className={`actions-dropdown-body ${
                    !bulkDropdownOpen ? "d-none" : ""
                  }`}
                >
                  <td>
                    <button id="bulk-detail">Details</button>
                    <button id="bulk-escalate">Escalate</button>
                    <button id="bulk-delete">Delete</button>
                    <button id="bulk-nudge">Nudge</button>
                  </td>
                </tr> */}
              </thead>
              <tbody {...getTableBodyProps()} className="rt-tbody">
                {page?.map((row, i) => {
                  prepareRow(row);

                  return (
                    <React.Fragment key={row.getRowProps()?.key}>
                      <tr
                        {...row.getRowProps()}
                        className={`${classnames("rt-tr table-row")} 
                        
                        
                        `}
                      >
                        {/* {hasBulkActions && (
                          <td className={`first-col-body p-0  `}>
                            <span
                              className={`p-0 d-block
                              
                              `}
                            >
                              <input
                                className={`table-body-input`}
                                checked={
                                  singleChecked.length > 1
                                    ? singleChecked[i]
                                    : false
                                }
                                onChange={(e) => {
                                  handleOnCheck(i);

                                  if (e.target.checked) {
                                    setCheckedIds([
                                      ...checkedIds,
                                      row.original.id,
                                    ]);
                                  } else if (e.target.checked === false) {
                                    setCheckedIds(
                                      checkedIds.filter(
                                        (id) => id !== row.original.id
                                      )
                                    );
                                  }
                                }}
                                type="checkbox"
                                name="singleSelect"
                                id=""
                              />
                            </span>
                          </td>
                        )} */}
                        {row.cells?.map((cell, i) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              onClick={() => {
                                if (i !== row.cells.length - 1) {
                                  activateView(row.original.data);
                                  row.original.activateView &&
                                    row.original.activateView(
                                      row.original.data
                                    );
                                }
                              }}
                              //${i === 0 && hasBulkActions ? "td-margin" : ""}
                              className={`rt-td 
                              ${
                                i === row.cells.length - 1
                                  ? `last-col-body overflow-visible p-0`
                                  : ""
                              }
                              ${
                                i === row.cells.length - 2
                                  ? "second-last-col-body"
                                  : ""
                              }
                            `}
                            >
                              {i != row.cells.length - 1 && cell.render("Cell")}
                              {i === row.cells.length - 1 && (
                                <div
                                  className={`h-100 d-flex align-items-center 
                                  
                                  `}
                                >
                                  {/* <ActionsDropdown
                                    actions={row.original.actions}
                                    checkedIds={checkedIds}
                                  /> */}
                                  {prop.actions && (
                                    <td className="text-right">
                                      {prop.actions}
                                    </td>
                                  )}
                                </div>
                              )}
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
          </div>
        </div>

        <div className="pagination-bottom">
          <div className="-pagination">
            <div className="-center flex-nowrap">
              {/* <Pagination
                className="pagination-bar"
                pagination={pagination}
                currentPage={pagination.currentPage}
                totalCount={pagination.totalResults}
                pageSize={pagination.size}
                onPageChange={(page, size) => {
                  handlePagination({ page, size });
                }}
                onSizeChange={(page, size) => {
                  handlePagination({ page, size });
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
