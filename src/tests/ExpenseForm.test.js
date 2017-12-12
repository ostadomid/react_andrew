import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { shallow } from 'enzyme';

describe('Expense Form Tests', () => { 
    test('Should Change Input Correctly', () => { 
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('input').at(0).simulate('change', { target: { value: 5 } });
        expect(wrapper.state('amount')).toBe(5);
    });
    
    test('Should correctly submit the Form', () => { 
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(wrapper.state('isSubmitted')).toBe(false);
    });
});