interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return <div className="grid grid-cols-4 gap-4 p-4 bg-black">{children}</div>;
};

export default List;
