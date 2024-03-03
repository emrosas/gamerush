export const fetchPosts = async (param: string) => {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_APP_RAWG_KEY}&ordering=-rating&page_size=24`
  );
  const data = await response.json();
  return data.results;
};
