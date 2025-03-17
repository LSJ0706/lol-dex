import List from "@/components/commons/List";
import ItemCard from "@/components/items/ItemCard";
import { fetchItemList } from "@/utils/serverApi";

const page = async () => {
  const items = await fetchItemList();
  return (
    <List>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          imageUrl={item.srcset}
          title={item.name}
          info={[item.priceBuy, item.priceSell, item.description]}
        />
      ))}
    </List>
  );
};

export default page;
