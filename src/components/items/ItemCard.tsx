import Image from "next/image";
import Text from "../commons/Text";

interface CardProps {
  imageUrl: string;
  title: string;
  info: string[];
}

const ItemCard: React.FC<CardProps> = ({ imageUrl, title, info = [] }) => {
  return (
    <div>
      <Image src={imageUrl} alt={title} width={50} height={50} />
      <h2 className="text-item_explanation_title">{title}</h2>
      <Text color="item_price" size="sm">
        살 때: {info[0]}
      </Text>
      <Text color="item_price" size="sm">
        팔 때: {info[1]}
      </Text>
      <Text color="item_ability" size="sm">
        {info[2]}
      </Text>
    </div>
  );
};

export default ItemCard;
