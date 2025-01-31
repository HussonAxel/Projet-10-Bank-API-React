const localStorageSaver = (key: string, value: string) => {
  localStorage.setItem(key, value);
};


const localStorageClearItem = (key: string) => {
  localStorage.removeItem(key);
}

const localStorageClearAll = () => {
  console.log("test")
  localStorage.clear();
}

export { localStorageClearItem, localStorageClearAll ,localStorageSaver };