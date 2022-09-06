export const fetchData = async () => {
  const endpoint: string =
    process.env.REACT_APP_API_URL !== undefined
      ? process.env.REACT_APP_API_URL
      : "";
  const data = await (await fetch(endpoint)).json();

  return data;
};
