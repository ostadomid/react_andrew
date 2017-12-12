export const addExpenseAction = (newExpense) => ({
    type: 'ADD_EXPENSE',
    newExpense
});
export const editExpenseAction = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
export const removeExpenseAction = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const setFilter = (tetx) => ({
    type: 'SET_FILTER',
    text
});

export const setSort = (sort) => ({
    type: 'SET_SORT',
    sort
});