# react-datatable

A demonstration on encapsulating [datatables](https://datatables.net/) library in React.

## Quick Usage Guide

Give an JSON object array as the data source, and the columns you want to display:

```js
const data = [
  {
    id: "1",
    name: "Tiger Nixon",
    position: "System Architect",
    salary: "$320,800",
    start_date: "2011/04/25",
    office: "Edinburgh",
    extn: "5421",
  },
  {
    id: "2",
    name: "Garrett Winters",
    position: "Accountant",
    salary: "$170,750",
    start_date: "2011/07/25",
    office: "Tokyo",
    extn: "8422",
  },
];

const columns = [
  { data: "name", title: "Name" },
  { data: "position", title: "Position" },
];
```

Then, use the `DataTable` component to render the table:

```jsx
const EmployeeTable = () => {
  return <DataTable data={data} columns={columns} />;
};
```

The component props of the `DataTable` component are compatible with the datatables's [options](https://datatables.net/manual/options).

## Installation

1. Execute the following command to install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn
   ```

2. Execute the following command to run the example application:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```
