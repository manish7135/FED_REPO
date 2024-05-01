const apiKey = '0LF5dNlRwHKRxU0GlDoHf365sEnQit6m';
    const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;

    function fetchTrendingGIFs() {
      fetch(trendingURL) 
        .then(response => response.json())
        .then(data => displayGIFs(data.data))
        .catch(error => console.error('Error fetching trending GIFs:', error));
    }

    function searchGIFs() {
      const searchQuery = document.getElementById('searchInput').value;
      const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${searchQuery}`;
      fetch(searchURL)
        .then(response => response.json())
        .then(data => displayGIFs(data.data))
        .catch(error => console.error('Error searching GIFs:', error));
    }

    function displayGIFs(gifs) {
      const gifContainer = document.getElementById('gifContainer');
      gifContainer.innerHTML = '';
      gifs.forEach(gif => {
        const gifElement = document.createElement('div');
        gifElement.classList.add('gif');
        gifElement.innerHTML = `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`;
        gifContainer.appendChild(gifElement);
      });
    }

    // Fetch trending GIFs when the page loads
    fetchTrendingGIFs();