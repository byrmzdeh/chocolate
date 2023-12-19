export const newsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.news];

    case "EDIT_PRODUCT":
      return state.map(item => {
        if (action.id === item.id) {
          return { ...item, ...action.update }
        } else {
          return item
        }
      })
    case "REMOVE_PRODUCT":
      return state.filter(item => item.id !== action.id)
      case "SET_PRODUCT":
        return action.newss;
    default:
      return state;
  }
}
