import './TableTransaction.css';
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from 'antd';
import 'react-toastify/dist/ReactToastify.css';

interface Transaction {
  id: number;
  value: number;
  observation: string;
  date: string;
  type: string;
}

export const TableTransaction = (props: { table: Transaction[], deleteTransaction: any }) => {
  const columns: TableColumnsType<Transaction> = [
    {
      title: "Valor",
      dataIndex: "value",
      key: "value",
      sorter: (a, b) => a.value - b.value
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
      key: "type",
      filters:
        [
          {
            text: 'Receita',
            value: 'Receita'
          },
          {
            text: 'Despesa',
            value: 'Despesa'
          },
        ],
        onFilter: (value, record) => record.type.indexOf(value as string) === 0,
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

  const onChange: TableProps<Transaction>['onChange'] = (pagination, filters, sorter, extra) => {};



  return (
    <div>
      <Table columns={columns} dataSource={props.table} rowKey="id" 
      onChange={onChange} showSorterTooltip={{ target: 'sorter-icon' }}></Table>
    </div>
  );
};
