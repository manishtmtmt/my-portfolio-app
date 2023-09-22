export const getData = (key) => {
  if (key) return JSON.parse(localStorage.getItem(key));
};

export const saveData = (key, value) => {
  if (key && value !== null) localStorage.setItem(key, value);
};
