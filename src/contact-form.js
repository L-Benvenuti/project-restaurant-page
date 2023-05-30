// import Error from './imgs/madCapy.jpeg';

export const form = function () {
  const formContainer = document.createElement('div');
  formContainer.classList = 'formContainer';
  const form = document.createElement('form');

  const nLabel = document.createElement('label');
  nLabel.setAttribute('for', 'fullName');
  nLabel.innerText = 'Full Name: ';
  const name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('name', 'fullName');
  name.setAttribute('id', 'fullName');

  const tLabel = document.createElement('label');
  tLabel.setAttribute('for', 'phone');
  tLabel.innerText = 'Phone Number: ';
  const tel = document.createElement('input');
  tel.setAttribute('type', 'number');
  tel.setAttribute('name', 'phone');
  tel.setAttribute('id', 'phone');

  const eLabel = document.createElement('label');
  eLabel.setAttribute('for', 'email');
  eLabel.innerText = 'Email: ';
  const email = document.createElement('input');
  email.setAttribute('type', 'email');
  email.setAttribute('name', 'email');
  email.setAttribute('id', 'email');

  const fLabel = document.createElement('label');
  fLabel.setAttribute('for', 'feedback');
  fLabel.innerText = 'Leave us feedback: ';
  const feedback = document.createElement('textarea');
  feedback.setAttribute('name', 'feedback');
  feedback.setAttribute('id', 'feedback');
  feedback.setAttribute('rows', '8');
  feedback.setAttribute('cols', '80');

  const subBtn = document.createElement('p');
  subBtn.innerText = 'Submit';
  subBtn.classList = 'submit';
  subBtn.addEventListener('click', () => { responseBtn(); });

  form.appendChild(nLabel);
  form.appendChild(name);
  form.appendChild(tLabel);
  form.appendChild(tel);
  form.appendChild(eLabel);
  form.appendChild(email);
  form.appendChild(fLabel);
  form.appendChild(feedback);
  form.appendChild(subBtn);

  formContainer.appendChild(form);

  function responseBtn() {
    //   const madCapy = new Image();
    //   madCapy.src = Error;

    console.log('the button works at least');

    if (!name.value || !tel.value || !email.value || !feedback.value) {
      alert('Come on man, you either forgot to fill out the whole form or you messed it up...'
        + '\nNow go back and please fill everything out this time');
    } else {
      alert('Actually, we thought this through and we really don\'t care about your feedback.'
          + '\nIf we\'re not good enough for you, you can stay home.'
          + '\nIf it was good feedback... well, we didn\'t think that far... thanks I guess?');
    }
  }

  return formContainer;
};
