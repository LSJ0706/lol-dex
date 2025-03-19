import Image from "next/image";
import Text from "../commons/Text";

interface ChampionCardProps {
  imageUrl: string;
  name: string;
  alias: string;
}

const ChampionCard: React.FC<ChampionCardProps> = ({
  imageUrl,
  name,
  alias,
}) => {
  return (
    <div className="text-white p-4 rounded-lg shadow-md border border-gray-600 w-56 h-80 flex flex-col items-center justify-start overflow-hidden">
      <Image
        src={imageUrl}
        alt={name}
        width={70}
        height={70}
        className="mb-2"
      />
      <h2 className="text-lg font-semibold text-item_explanation_title text-center">
        {name}
      </h2>
      <div className="overflow-y-auto max-h-28 text-center w-full px-2">
        <Text color="champion_alias" size="sm">
          {alias}
        </Text>
      </div>
    </div>
  );
};

export default ChampionCard;
