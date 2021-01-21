const getJokeBtn = document.querySelector('.get-jokes');
const jokes = document.getElementById('jokes');

getJokeBtn.addEventListener('click', getJoke);

function getJoke(e) {
  const number = document.getElementById('number').value;
  console.log(number);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      console.log(this.responseText);
      const jokes = JSON.parse(this.responseText);
      // console.log(jokes);
      let output = '';
      if (jokes.type === 'success') {
        jokes.value.forEach(function(joke) {
          // console.log(joke);
          output += `
        <ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          <h4>${joke.id}</h4>
          <li>${joke.joke}</li>
          <hr/>
        </ul>
        `;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  };
  xhr.send();
  e.preventDefault();
}
