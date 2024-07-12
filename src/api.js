// api.js
export const fetchJoke = async () => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    return {
      joke: data.value,
      iconUrl: data.icon_url,
    };
  } catch (error) {
    console.error('Error fetching joke:', error);
    return '';
  }
};
