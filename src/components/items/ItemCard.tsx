import Image from "next/image";
import Text from "../commons/Text";

interface CardProps {
  imageUrl: string;
  title: string;
  info: string[];
}

const ItemCard: React.FC<CardProps> = ({ imageUrl, title, info = [] }) => {
  return (
    <div className="text-white p-4 rounded-lg shadow-md border border-gray-600 w-56 h-80 flex flex-col items-center justify-start overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={70}
        height={70}
        className="mb-2"
      />
      <h2 className="text-lg font-semibold text-item_explanation_title text-center">
        {title}
      </h2>

      <Text color="item_price" size="sm">
        살 때: {info[0]}
      </Text>
      <Text color="item_price" size="sm">
        팔 때: {info[1]}
      </Text>
      <div className="overflow-y-auto max-h-28 text-center space-between w-full px-2">
        <Text color="item_ability" size="sm">
          {info[2]}
        </Text>
      </div>
    </div>
  );
};

export default ItemCard;
