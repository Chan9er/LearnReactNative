export const addItem = food => ({
  type: ADD_ITEM,
  data: food,
});

export const deleteItem = key => ({
  type: DELETE_ITEM,
  key: key,
});

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
