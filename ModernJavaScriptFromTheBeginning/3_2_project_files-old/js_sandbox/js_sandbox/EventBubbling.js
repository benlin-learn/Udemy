// Event Bubbling

document.querySelector('.card-title').addEventListener('click', function() {
  console.log('card title');
});

// Event Delegation
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // console.log(e.target);

  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete item');
  // }
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}
