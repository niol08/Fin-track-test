export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: 'Credit' | 'Debit';
}

interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

export interface SidebarItem {
  label: string;
  href: string;
}

export interface AppData {
  sidebar: {
    items: SidebarItem[];
  };
  dashboardSummary: DashboardSummary;
  transactions: Transaction[];
}
