export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = item => ({
  type: ADD_ITEM,
  data: item,
});

export const deleteItem = key => ({
  type: DELETE_ITEM,
  key: key,
});
