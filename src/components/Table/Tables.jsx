import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";

const Tables = ({ children }) => {
  return (
    <>
      <Table striped hover>
        <thead>
          <tr>
            <th>
              <i class="fa-solid fa-arrow-up-long"></i>
              <i class="fa-solid fa-arrow-down-long mr-2"></i>Name
            </th>
            <th>Modified by</th>
            <th>Last modified</th>
            <th>File size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Devs team salary</td>
            <td>Abdullah al rafee</td>
            <td>Jun, 03, 2022</td>
            <td>320kb</td>
          </tr>
          <tr>
            <td>Ops team salary</td>
            <td>Nurul Haque</td>
            <td>Jun, 03, 2022</td>
            <td>320kb</td>
          </tr>
          <tr>
            <td>Ops team salary</td>
            <td>Nurul Haque</td>
            <td>Jun, 03, 2022</td>
            <td>320kb</td>
          </tr>
          <tr>
            <td>Ops team salary</td>
            <td>Nurul Haque</td>
            <td>Jun, 03, 2022</td>
            <td>320kb</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

Tables.propTypes = {
  children: PropTypes.node,
};
export default Tables;
