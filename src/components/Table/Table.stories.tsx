import { StoryFn, Meta } from '@storybook/react';
import { Table } from './Table.component';
import { TableProps } from './Table.props';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const headers = ['Name', 'Email', 'Phone'];

const rows = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-1234',
  },
  {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '555-5678',
  },
];

const renderRow = (row: Record<string, any>) => (
  <>
    <td><input type='checkbox' /></td>
    {Object.values(row).map((value) => (
      <td key={value}>{value}</td>
    ))}
  </>
);

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers,
  rows,
  renderRow,
};
