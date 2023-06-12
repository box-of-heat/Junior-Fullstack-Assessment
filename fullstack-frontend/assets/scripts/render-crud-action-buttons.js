
export const renderCrudActionButtons = () => {
  const crudElements = document.querySelector('.crud_action_elements');

  const addButton = document.createElement('button');
  addButton.innerText = 'Add a new Pet';

  addButton.onclick = () => {
    console.log("Add button clicked !");
    window.location.href = "http://127.0.0.1:5500/new.html";
  };

  crudElements.appendChild(addButton);
};
