export const fetchSearchGiphys = (searchTerm) => {
  return $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search' +
      `?q=${encodeURI(searchTerm)}&api_key=dc6zaTOxFJmzC&limit=2`
  });
};
