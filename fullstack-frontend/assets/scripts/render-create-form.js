import { displayMessage } from "./index.js";
export const renderCreateForm = () => {

  const createLineBreak = () => {
    const br = document.createElement('br');
    return br;
  }

  const createForm = document.querySelector('form');
  createForm.id = 'create-form';

  // Name
  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'Name';
  nameLabel.htmlFor = createForm.id;

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';

  // Species
  const speciesLabel = document.createElement('label');
  speciesLabel.innerText = 'Species';
  speciesLabel.htmlFor = createForm.id;

  const speciesInput = document.createElement('input');
  speciesInput.type = 'text';
  speciesInput.name = 'species';

  // Age
  const ageLabel = document.createElement('label');
  ageLabel.innerText = 'Age';
  ageLabel.htmlFor = createForm.id;

  const ageInput = document.createElement('input');
  ageInput.type = 'number';
  ageInput.name = 'age';

  // Breed
  const breedLabel = document.createElement('label');
  breedLabel.innerText = 'Breed';
  breedLabel.htmlFor = createForm.id;

  const breedInput = document.createElement('input');
  breedInput.type = 'text';
  breedInput.name = 'breed';

  // Color
  const colorLabel = document.createElement('label');
  colorLabel.innerText = 'Color';
  colorLabel.htmlFor = createForm.id;

  const colorInput = document.createElement('input');
  colorInput.type = 'text';
  colorInput.name = 'color';

  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Submit';

  submitButton.onclick = (event) => {
    event.preventDefault();

    const formData = new FormData(createForm);

    // The api expects form data to be sent to the server as JSON nested under pet: {key: value,  ... }
    const formDataJSON = Object.fromEntries(formData.entries());
    const petData = {
      pet: formDataJSON
    }

    console.log("Pet data", petData);

    fetch('http://localhost:3000/api/v1/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(petData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      if (data.status === 'success') {
        // Redirect to index.html on success
        window.location.href = 'http://127.0.0.1:5500/index.html';
        displayMessage(data.message);
      } else if (data.status === 'error') {
        // Display errors on create failure
        displayMessage(data.message);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  createForm.appendChild(nameLabel);
  createForm.appendChild(createLineBreak());
  createForm.appendChild(nameInput);
  createForm.appendChild(createLineBreak());
  createForm.appendChild(speciesLabel);
  createForm.appendChild(createLineBreak());
  createForm.appendChild(speciesInput);
  createForm.appendChild(createLineBreak());
  createForm.appendChild(ageLabel);
  createForm.appendChild(createLineBreak());
  createForm.appendChild(ageInput);
  createForm.appendChild(createLineBreak());
  createForm.appendChild(breedLabel);
  createForm.appendChild(createLineBreak());
  createForm.appendChild(breedInput);
  createForm.appendChild(createLineBreak());
  createForm.appendChild(colorLabel);
  createForm.appendChild(createLineBreak());
  createForm.appendChild(colorInput);
  createForm.appendChild(createLineBreak());

  createForm.appendChild(submitButton);

};

renderCreateForm();
