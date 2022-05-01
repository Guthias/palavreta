export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalstoage = (key) => JSON.parse(localStorage.getItem(key));
