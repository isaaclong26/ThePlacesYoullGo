const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#bucket-list-item-name').value.trim();
  
    if (name) {
      const response = await fetch(`/api/bucketlist`, {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create list item');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/bucketlist/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete list item');
      }
    }
  };
  
  document
    .querySelector('.new-bucketlist-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.bucket-list')
    .addEventListener('click', delButtonHandler);
  