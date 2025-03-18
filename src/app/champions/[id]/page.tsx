import Text from "@/components/commons/Text";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const details = await fetchChampionDetail(params.id);
  return (
    <div>
      {details.map((detail) => (
        <div key={detail.id}>
          <h2>{detail.name}</h2>
          <Text color="champion_alias" size="md">
            {detail.alias}
          </Text>
          <Image src={detail.srcset} alt={detail.name} width={50} height={50} />
          <Text color="champion_alias" size="sm">
            {detail.description}
          </Text>
          {detail.spell.map((spell) => (
            <div key={spell.id}>
              <Image src={spell.image} alt={spell.id} width={50} height={50} />
              <Text color="item_ability" size="sm">
                {spell.name}
              </Text>
              <Text color="item_ability" size="sm">
                {spell.description}
              </Text>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChampionDetailPage;
