// Local storage helpers

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}