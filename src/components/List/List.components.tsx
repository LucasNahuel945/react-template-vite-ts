import { ListProps } from './List.props'

export const Lista = ({ items }: ListProps) => {
  return (
    <ul>
      { items.map((x, i) => <li key={i}>{x}</li>) }
    </ul>
  );
};