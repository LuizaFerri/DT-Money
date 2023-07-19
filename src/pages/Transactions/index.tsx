import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/Index";
import { SearchForm } from "./SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento de website</td>
              <td className="deposit">
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>20/02/2023</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de website</td>
              <td className="deposit">
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>20/02/2023</td>
            </tr>
            <tr>
              <td width="40%">Desenvolvimento de website</td>
              <td className="deposit">
                {" "}
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>20/02/2023</td>
            </tr>
            <tr>
              <td width="40%">Hamburguer</td>
              <td className="deposit">
                {" "}
                <PriceHighlight variant="outcome">- R$ 12.000</PriceHighlight>
              </td>
              <td>alimentação</td>
              <td>20/02/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
