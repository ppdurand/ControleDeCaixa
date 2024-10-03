import './TableTransaction.css';
import { Table } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

interface Transaction {
  id: number;
  value: number;
  observation: string;
  date: string;
  type: string;
}

export const TableTransaction = (props: { table: Transaction[] , deleteTransaction: any}) => {
  const { handleSubmit } = useForm();


  const onSubmit = async (id: number) => {
    try {
      props.deleteTransaction(id);
    } catch (error) {
      console.error('Erro ao enviar a requisição:', error);
    }
  }

  return (
    <div id="tableComponent">

      <Table.Root className="table">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell id="valueCol">Valor</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell id="dateCol">Data</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell id="observationCol">Observação</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell id="typeCol">Tipo de movimentação</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
      </Table.Root>

      <Table.Body className="response">
        {props.table.length > 0 ? (
          props.table.map((transaction) => (
            <Table.Row key={transaction.id}>
              <Table.RowHeaderCell id="valueRes">{transaction.value}</Table.RowHeaderCell>
              <Table.RowHeaderCell id="dateRes">{transaction.date}</Table.RowHeaderCell>
              <Table.RowHeaderCell id="obsRes">{transaction.observation}</Table.RowHeaderCell>
              <Table.RowHeaderCell id="typeRes">{transaction.type}</Table.RowHeaderCell>
              <Table.RowHeaderCell>
                <button className="actionDel" type="submit" onClick={() => handleSubmit(() => onSubmit(transaction.id))()}>
                  <img src="/trash.png" alt="Deletar" style={{ width: '20px', height: '20px' }} />
                </button>
              </Table.RowHeaderCell>
            </Table.Row>
          ))
        ) : (
          <Table.Row>
            <Table.RowHeaderCell colSpan={4}>Nenhuma transação encontrada</Table.RowHeaderCell>
          </Table.Row>
        )}

      </Table.Body>
    </div>
  );
};
