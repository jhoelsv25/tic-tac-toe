
export const saveLocalstorage = ({board, turn}) => {
  localStorage.setItem('board', JSON.stringify(board));
  localStorage.setItem('turn', turn);
  
}
export const loadLocalstorage = () => {
    localStorage.getItem(JSON.parse('board'));
    localStorage.getItem('turn');
  }

  export const resetLocalstorage = () => {
    localStorage.removeItem('board');
    localStorage.removeItem('turn');
  }