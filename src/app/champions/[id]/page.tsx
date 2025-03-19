import Text from "@/components/commons/Text";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const details = await fetchChampionDetail(params.id);
  return (
    <div className="text-white p-6 bg-black min-h-screen">
      {details.map((detail) => (
        <div key={detail.id} className="flex flex-col items-center text-center">
          <Image
            src={detail.srcset}
            alt={detail.name}
            width={120}
            height={120}
            className="rounded-lg border border-gray-500"
          />
          <h2 className="text-3xl font-bold text-red-500 mt-4">
            {detail.name}
          </h2>
          <Text color="champion_alias" size="lg">
            {detail.alias}
          </Text>
          <Text color="champion_alias" size="sm">
            {detail.description}
          </Text>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            {detail.spell.map((spell) => (
              <div
                key={spell.id}
                className="p-4 border border-gray-500 rounded-lg bg-gray-900"
              >
                <Image
                  src={spell.image}
                  alt={spell.id}
                  width={60}
                  height={60}
                  className="mx-auto border border-gray-600 rounded-md"
                />
                <Text color="item_ability" size="md">
                  {spell.name}
                </Text>
                <Text color="item_ability" size="sm">
                  {spell.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChampionDetailPage;
