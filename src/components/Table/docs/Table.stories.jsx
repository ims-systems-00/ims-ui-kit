import { Table } from "reactstrap";
import Tables from "../Tables";

export default {
  title: "components/Table",
  component: Tables,
};

const Template = (args) => <Tables {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: (
    <Table striped hover>
      <thead>
        <tr>
          <th>Name</th>
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
  ),
};
