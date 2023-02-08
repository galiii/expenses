import { Expense, Payment } from "../models/expenses";

function createData(
    date: string,
    amount: number,
    payments: Payment, //category: number,
    detail?: string
): Expense {
    return { detail, date, amount, payments /*carbs*/ };
}

export const contacts = [
    createData("1.1", 30, Payment.CREDIT_CARD, "Frozen yoghurt"),
    createData("2.1", 9.0676757, Payment.CASH, "Ice cream sandwich"),
    createData("1.1", 262, Payment.CREDIT_CARD, "Eclair"),
    createData("3.1", 3.7, Payment.ACH, "Cupcake"),
    createData("4.1", 356, Payment.CASH, "Gingerbread"),
];
