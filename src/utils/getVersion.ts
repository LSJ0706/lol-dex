export const fetchLatestVersion = async (): Promise<string> => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const version: string[] = await response.json();
  return version[0];
};
