import './TableTransaction.css';
import { Table } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
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
    } catch (error) {}
  }

  return (
    <div>
      <table className='tableComponent'>
        <thead className='columns'>
          <div className='tablePt1'>
            <th className='valueCol'>Valor</th>
            <th className='dateCol'>Data</th>
            <th className='obsCol'>Observação</th>
          </div>
          <div className='tablePt2'>
            <th className='typeCol'>Tipo de Movimentação</th>
            <th className='actions'>Ações</th>
          </div>
        </thead>
        <tbody className='response'>
          {props.table.length > 0 ? (
            props.table.map((transaction) => (
              <div className='responseRow'>
                <div className='tablePt1'>
                  <td className='valueRes'>R$ {transaction.value}</td>
                  <td className='dateRes'>{transaction.date}</td>
                  <td className='obsRes'>{transaction.observation}</td>
                </div>
                <div className='tablePt2'>
                  <td className={transaction.type === 'Receita' ? 'typeReceita' : 'typeDespesa'}>{transaction.type}</td>
                  <td>
                    <button className="actionDel" type="submit" onClick={() => handleSubmit(() => onSubmit(transaction.id))()}>
                      <img src="/trash.png" alt="Deletar" style={{ width: '20px', height: '20px' }} />
                    </button>
                  </td>
                </div>
              </div>
            ))
          ) : (
            <div className='responseRow'>
              <Table.RowHeaderCell colSpan={4}>Nenhuma transação encontrada</Table.RowHeaderCell>
            </div>
          )}


        </tbody>
      </table>
    </div>
  );
};
