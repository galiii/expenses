export enum Payment {
    CASH = "Cash",
    CREDIT_CARD = "Credit Card",
    BIT = " Bit",
    CHECK = "Check",
    ACH = "ACH",
}

export enum Category {
    FOOD,
    HOUSE,
    INSURANCE,
}

export interface Expense {
    id: string;
    detail?: string;
    date: string;
    amount: number;
    payments: Payment;
}


