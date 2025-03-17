const fetchLatestVersion = async (): Promise<string> => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const version: string[] = await response.json();
  return version[0];
};

export const getDataUrl = async (): Promise<string> => {
  const version = await fetchLatestVersion();
  return `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/`;
};

export const getDataImgUrl = async (): Promise<string> => {
  const version = await fetchLatestVersion();
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/`;
};
