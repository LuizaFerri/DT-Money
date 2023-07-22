import { MagnifyingGlass } from "phosphor-react";
import { SeachFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
  query: z.string().nonempty("Campo obrigatório"),
});

type SearchFormSchemaType = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormSchemaType) {
    await fetchTransactions(data.query);
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <SeachFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SeachFormContainer>
  );
}
