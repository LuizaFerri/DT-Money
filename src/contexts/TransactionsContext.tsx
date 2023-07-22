import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

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
    const response = await api.get("/transactions",{
      params: {
        q: query
      }
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setTransactions(response.data);
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
