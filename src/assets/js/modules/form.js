export const form = () => {
  const fileInputButton = document.querySelector('.file-input');
  fileInputButton.addEventListener('click',e => {
    e.currentTarget.previousElementSibling.click()
  });
  // В случае, если там таких несколько будет
  const range = document.querySelectorAll('.order__range')
  range.forEach(item => {
    item.addEventListener('input',e => {
    const percentBox = e.currentTarget.closest('.form-group').querySelector('.form-group__percent');
    percentBox.textContent = e.currentTarget.value + ' %'
    })
  })

  const select = document.querySelector('.select');
  select.addEventListener('click', e => {
    e.preventDefault();
    const drop = e.currentTarget.querySelector('.select__drop');
    e.currentTarget.classList.toggle('active');
    drop.classList.toggle('active');
  })
  document.querySelector('.select__drop').addEventListener('click', e => {
    e.stopPropagation();
  })

  document.addEventListener('mouseup',e => {
    if(!e.target.closest('.select')){
      select.classList.remove('active');
      select.querySelector('.select__drop').classList.remove('active');
    }
  });
  document.querySelectorAll('.select__drop-item').forEach(item => {
    item.addEventListener('click',e => {
      const text = e.currentTarget.textContent;
      const selectText = e.currentTarget.closest('.select').querySelector('.select__name');
      const drop = e.currentTarget.closest('.select__drop');
      selectText.textContent = text;
      drop.classList.remove('active')
      e.currentTarget.closest('.select').classList.remove('active');
      e.currentTarget.closest('.select').querySelectorAll('.select__drop-item').forEach(i => {
        i.classList.remove('active')
      })
      e.currentTarget.classList.add('active');
    });
  })
}