import { render, screen } from '@testing-library/react';
import { Table } from './Table.component';


describe('Table', () => {
  test('renders a table with headers and rows', () => {
    interface rowTypes { name: string, age: number }
    const headers = ['Name', 'Age'];
    const rows = [
      { name: 'Alice', age: 28 },
      { name: 'Bob', age: 35 },
      { name: 'Charlie', age: 42 },
    ];

    const renderRow = (row: rowTypes) => (
      <>
        <td>{row.name}</td>
        <td>{row.age}</td>
      </>
    );

    render(<Table headers={headers} rows={rows} renderRow={renderRow} />);
    expect(screen.getByText(headers[0])).toBeInTheDocument();
    expect(screen.getByText(headers[1])).toBeInTheDocument();
    rows.forEach((row) => {
      expect(screen.getByText(row.name)).toBeInTheDocument();
      expect(screen.getByText(row.age.toString())).toBeInTheDocument();
    });
  });
});