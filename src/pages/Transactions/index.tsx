import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/Index";
import { SearchForm } from "./SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";


export function Transactions() {
  const {transactions} = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td className="deposit">
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
