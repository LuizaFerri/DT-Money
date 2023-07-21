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
}

export const TransactionContext = createContext({} as TransactionContextProps);

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions() {
      const response = await fetch("http://localhost:3333/transactions");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setTransactions(data);
    }
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      loadTransactions();
    }, []);
  return (
    <TransactionContext.Provider value={{transactions}}>
      {children}
    </TransactionContext.Provider>
  );
}
