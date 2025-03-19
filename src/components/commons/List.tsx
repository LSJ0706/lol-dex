interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-black text-white">
      {children}
    </div>
  );
};

export default List;
