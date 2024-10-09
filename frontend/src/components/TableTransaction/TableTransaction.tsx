import './TableFlex.css';
import { Table } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Transaction {
  id: number;
  value: number;
  observation: string;
  date: string;
  type: string;
}

export const TableTransaction = (props: { table: Transaction[], deleteTransaction: any }) => {
  const { handleSubmit } = useForm();

  const onSubmit = async (id: number) => {
    try {
      props.deleteTransaction(id);
      toast.success("Movimentação deletada!", {
        position: "bottom-right",
        autoClose: 2000,
      })
    } catch (error) {
      console.error('Erro ao enviar a requisição:', error);
      toast.error("Algo deu errado na deleção da movimentação");
    }
  }

  return (
    <div className="tableComponent">
      <ToastContainer />
      <div className="columns">
        <Table.Root className="tablePt1">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="valueCol">Valor</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="dateCol">Data</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="observationCol">Observação</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
        </Table.Root>
  
        <Table.Root className="tablePt2">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="typeCol">Tipo de movimentação</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="actions">Ações</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
        </Table.Root>
      </div>
  
      <div className="response">
        {props.table.length > 0 ? (
          props.table.map((transaction) => (
            <div className="responseRow" key={transaction.id}>
              <div className="tablePt1">
                <Table.Row>
                  <Table.RowHeaderCell className="valueRes">{transaction.value}</Table.RowHeaderCell>
                  <Table.RowHeaderCell className="dateRes">{transaction.date}</Table.RowHeaderCell>
                  <Table.RowHeaderCell className="obsRes">{transaction.observation}</Table.RowHeaderCell>
                </Table.Row>
              </div>
  
              <div className="tablePt2">
                <Table.Row>
                  <Table.RowHeaderCell className={transaction.type === 'Receita' ? 'typeReceita' : 'typeDespesa'}>
                    {transaction.type}
                  </Table.RowHeaderCell>
                  <Table.RowHeaderCell>
                    <button className="actionDel" type="submit" onClick={() => handleSubmit(() => onSubmit(transaction.id))()}>
                      <img src="/trash.png" alt="Deletar" style={{ width: '20px', height: '20px' }} />
                    </button>
                  </Table.RowHeaderCell>
                </Table.Row>
              </div>
            </div>
          ))
        ) : (
          <Table.Row>
            <Table.RowHeaderCell colSpan={4}>Nenhuma transação encontrada</Table.RowHeaderCell>
          </Table.Row>
        )}
      </div>
    </div>
  );
  
};
