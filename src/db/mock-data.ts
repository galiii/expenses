import { Expense, Payment } from "../models/expenses";
import data from './expenses.json';

function createData(): Expense[] {
    const jsonString = JSON.stringify(data);
    const expense = JSON.parse(jsonString).data.map((item: Expense) => {
        return {
            id: item.id,
            detail: item.detail,
            date: item.date,
            amount: item.amount,
            payments: item.payments as Payment, //category: number,

        }
    }
    ) as Expense[];
    console.log(expense);

    return expense;
}

export const contacts = createData();
