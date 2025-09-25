// Enter the 1984 as the birth year
const inputFields = document.querySelectorAll('.blp-age-gate__input-group .blp-age-gate__input-field');
const year = '1984';

inputFields.forEach((inputField, index) => {
  inputField.value = year[index];
  inputField.dispatchEvent(new Event('input', { bubbles: true }));
});

// Accept default cookies
const button = document.querySelector('#js-btn-save .btn.btn--white.text--bold.l-border.cookie-notice__btn');
if (button) {
  button.click();
}
