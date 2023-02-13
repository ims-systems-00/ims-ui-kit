import React from "react";
import ReactTable from "../ReactTable/ReactTable";

const ReactTableDemo = ({}) => {
  return (
    <div>
      <ReactTable
        data={[
          {
            name: "Tanner Linsley",
            age: 26,
            email: "tan@gmail.com",
            phone: "1234567890",
          },
          {
            name: "Tanner Linsley",
            age: 26,
            email: "tan@gmail.com",
            phone: "1234567890",
          },
          {
            name: "Tanner Linsley",
            age: 26,
            email: "tan@gmail.com",
            phone: "1234567890",
          },
          {
            name: "Tanner Linsley",
            age: 26,
            email: "tan@gmail.com",
            phone: "1234567890",
          },
        ]}
        columns={[
          {
            Header: "Name",
            accessor: "name", // accessor is the "key" in the data
          },
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Phone",
            accessor: "phone",
          },
          {
            Header: "Actions",
            accessor: "actions",
          },
        ]}
      />
    </div>
  );
};

export default ReactTableDemo;
