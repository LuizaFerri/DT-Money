import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content,CloseButton} from "./styles";
import {X} from "phosphor-react"

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton >
            <X size={24}/>
        </CloseButton>
        <form action="">
            <input placeholder="Descrição" required/>
            <input type="number" placeholder="Preço" />
            <input placeholder="Categoria" />

            <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}