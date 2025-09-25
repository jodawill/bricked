function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForElements(id) {
  let elements;
  for (let i = 0; i < 1000; i++) {
    elements = document.querySelectorAll(id);
    if (elements.length > 0) {
      break
    }
    await sleep(10);
  }
  return elements;
}

(async function main() {
  // Enter 1984 as the birth year
  inputFields = await waitForElements('.blp-age-gate__input-group .blp-age-gate__input-field');
  const year = '1984';

  inputFields.forEach((inputField, index) => {
    inputField.value = year[index];
    inputField.dispatchEvent(new Event('input', { bubbles: true }));
  });
  console.log(`Entered ${year} as birth year`);

  // Accept default cookies
  const button = (await waitForElements('#js-btn-save .btn.btn--white.text--bold.l-border.cookie-notice__btn'))[0];
  if (button) {
    button.click();
    console.log('Accepted default cookies');
  }
})();
