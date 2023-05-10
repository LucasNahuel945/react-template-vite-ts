import { TableProps } from './Table.props'

export const Table = ({ headers, rows, renderRow }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th><input type='checkbox' /></th>
          { headers.map((header) => <th key={header}>{header}</th>) }
        </tr>
      </thead>
      <tbody>
        { rows.map((row, index) => <tr key={index}>{renderRow(row)}</tr>) }
      </tbody>
    </table>
  );
};
