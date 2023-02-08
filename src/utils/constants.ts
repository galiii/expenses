// APP TEXT
export const APP_TITLE = "Welcome, Developer"
export const FOOTER_TEXT = `${new Date().getFullYear()} Built with ♡ by Welcome, Developer`
// PAGES TITLE
export const PAGE_TITLE_HOME = "Home"
export const PAGE_TITLE_DASHBOARD = "Dashboard"
export const PAGE_TITLE_GH_PRIVATE = "GitHub Private"
export const PAGE_TITLE_GH_PUBLIC = "GitHub Public"
export const PAGE_TITLE_CODE = "Code Editor"
export const PAGE_TITLE_SETTINGS = "Settings"
// UI CONSTANTS
export const FOOTER_HEIGHT = 30
export const HEADER_HEIGHT = 60
export const DRAWER_WIDTH = 250

interface Column {
    id: "detail" | "date" | "amount" | "payments";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
}

export const columns: readonly Column[] = [
    { id: "detail", label: "Detail", minWidth: 80 },
    { id: "date", label: "Date", minWidth: 120 },
    {
        id: "amount",
        label: "Amount",
        minWidth: 11,
        align: "right",
        format: (value: number) => value.toFixed(2),
    },
    { id: "payments", label: "Payment", minWidth: 52, align: "right" },
];