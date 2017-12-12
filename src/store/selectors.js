export const getVisibleExpenses = (expenses, filter) => { 
    
    const filtered = expenses.filter((expense) => {
        const startDateMatch = !filter.startDate || filter.startDate <= expense.createdAt;
        const endDateMatch = !filter.endDate || filter.endDate >= expense.createdAt;
        const textMatch = !filter.text || expense.description.toLowerCase().includes(filter.text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    });

    
    const sorted = filtered.sort((a, b) => { 
        return filter.sort === 'amount' ? b.amount - a.amount : b.createdAt - a.createdAt;
    });

    return sorted;
    
};

