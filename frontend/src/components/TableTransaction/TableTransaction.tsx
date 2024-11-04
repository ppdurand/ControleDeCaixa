import './TableTransaction.css';
import { Button, Table } from "antd";
import type { TableProps } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import { table } from 'console';

interface Transaction {
  id: number;
  value: number;
  observation: string;
  date: string;
  type: string;
}

export const TableTransaction = (props: { table: Transaction[], deleteTransaction: any }) => {
  const columns: TableProps<Transaction>['columns'] = [
    {
      title: "Valor",
      dataIndex: "value",
      key: "value"
    },
    {
      title: "Data",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Observação",
      dataIndex: "observation",
      key: "observation"
    },
    {
      title: "Tipo de Movimentação",
      dataIndex: "type",
      key: "type"
    },
    {
      title: "Ações",
      key: "actions",
      render: (_, record) => (
        <Button type="link" onClick={() => props.deleteTransaction(record.id)}>
          Excluir
        </Button>
      )
    }
  ]

  const onSubmit = async (id: number) => {
    try {
      props.deleteTransaction(id);
    } catch (error) {}
  }

  return (
    <div>
      <Table columns={columns} dataSource={props.table} rowKey="id"></Table>
    </div>
  );
};
