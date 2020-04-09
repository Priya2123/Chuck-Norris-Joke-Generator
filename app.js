document.getElementById('get-jokes').addEventListener('click',getJokes);
document.getElementById('get-jokes').addEventListener('click',changeColor);
function getJokes(e){
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);

  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      //console.log(response);
      let output = '';
      if(response.type === 'success'){
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      }else{
        output += '<li>Something went wrong</li>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();
  e.preventDefault();
}
const colors = ['aliceBlue','beige','pink','antiqueWhite','cyan','coral','yellow','cornsilk','lightGray','navajoWhite'];
document.body.style.backgroundColor = 'white';
function changeColor(){
const colorIndex = parseInt(Math.random()*colors.length);
document.body.style.backgroundColor = colors[colorIndex];
}