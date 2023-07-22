import { createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextProps {
  transactions: Transaction[];
  fetchTransactions: (query?:string) => Promise<void>;
}

export const TransactionContext = createContext({} as TransactionContextProps);

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3333/transactions");

    if (query) {
      url.searchParams.append("q", query);
    }

    const response = await fetch(url);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setTransactions(data);
  }
  useEffect(() => {
    void fetchTransactions();
  }, []);
  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
}
