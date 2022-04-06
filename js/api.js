const createLoader = (onSuccess, onError) => () =>
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });

const sendData = (closeEditFormModal, onSuccess, onError, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        closeEditFormModal();
        onSuccess();
      } else {
        onError('Ошибка загрузки файла');
      }
    })
    .catch(() => {
      onError('Ошибка загрузки файла');
    });
};

export {createLoader, sendData};
