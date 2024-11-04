import './TableTransaction.css';
import { Button, DatePicker, Table } from "antd";
import type { TableColumnsType, TableProps } from 'antd';
import moment, { Moment } from 'moment';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import type { RangePickerProps } from 'antd/es/date-picker';



const { RangePicker } = DatePicker;

interface Transaction {
  id: number;
  value: number;
  observation: string;
  date: string;
  type: string;
}


export const TableTransaction = (props: { table: Transaction[], deleteTransaction: any }) => {
  const [filteredDate, setFilteredData] = useState<Transaction[]>(props.table);

    const onChangeFilter: RangePickerProps['onChange'] = (dates, dateStrings) => {
      if (dates) {
        const [startString, endString] = dateStrings;
        const start = moment(startString)
        const end = moment(endString)
        const filteredDates = props.table.filter((transaction: Transaction) => {
          const transactionDate = moment(transaction.date);
          return transactionDate.isBetween(start, end, 'day', '[]');
        });
        setFilteredData(filteredDates);
      } else {
        setFilteredData(props.table);
      }
    };

  const onChange: TableProps<Transaction>['onChange'] = (pagination, filters, sorter, extra) => { };

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
      key: "date",
      render: (date: string) => moment(date).format("YYYY-MM-DD"),
      filterDropdown: () => (
        <RangePicker onChange={onChangeFilter}/>),
        onFilterDropdownVisibleChange: (visible) => {
          if (!visible) setFilteredData(props.table);
        }
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

  return (
    <div>
      <Table columns={columns} dataSource={filteredDate} rowKey="id"
        onChange={onChange} showSorterTooltip={{ target: 'sorter-icon' }}></Table>
    </div>
  );
};
