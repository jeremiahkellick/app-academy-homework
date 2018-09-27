document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  document.querySelectorAll('.list-container form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const li = document.createElement('li');
      li.innerText = event.currentTarget
        .querySelector('input[type="text"]')
        .value;
      document.getElementById('restaurants').appendChild(li);
    });
  });



  // adding new photos

  const photoFormContainer = document.querySelector('.photo-form-container');

  document.querySelector('.photo-show-button').addEventListener('click', () => {
    photoFormContainer.classList.toggle('hidden');
  });

  photoFormContainer.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = event.currentTarget.querySelector('.photo-url-input').value;
    li.appendChild(img);
    document.querySelector('.dog-photos').appendChild(li);
  });



});
