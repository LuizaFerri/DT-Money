import { useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
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
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: NewTransactionData) => Promise<void>;
}

export const TransactionContext = createContext({} as TransactionContextProps);

interface TransactionsProviderProps {
  children: React.ReactNode;
}

interface NewTransactionData {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(async (data: NewTransactionData) => {
    const { description, price, category, type } = data;
    const response = await api.post("/transactions", {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    setTransactions((state) => [response.data, ...state]);
  }, []);

  useEffect(() => {
    void fetchTransactions();
  }, [fetchTransactions]);
  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
