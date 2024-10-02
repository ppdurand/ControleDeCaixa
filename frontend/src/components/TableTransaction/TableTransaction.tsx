import axios from "axios";
import React, { useEffect, useState } from "react";
import './TableTransaction.css';
import { COLUMNS } from "./Columns";
import { Table } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { table } from "console";

interface Transaction {
  id: number;
  value: number;
  observation: string;
  date: string;
  type: string;
}

export const TableTransaction = (props: { table: Transaction[] , deleteTransaction: any}) => {
  const [data, setData] = useState<Transaction[]>([]);
  const { handleSubmit } = useForm();


  const onSubmit = async (id: number) => {
    try {
      props.deleteTransaction(id);
    } catch (error) {
      console.error('Erro ao enviar a requisição:', error);
    }
  }

  return (
    <div>

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
              <Table.RowHeaderCell>{transaction.value}</Table.RowHeaderCell>
              <Table.RowHeaderCell>{transaction.date}</Table.RowHeaderCell>
              <Table.RowHeaderCell>{transaction.observation}</Table.RowHeaderCell>
              <Table.RowHeaderCell>{transaction.type}</Table.RowHeaderCell>
              <Table.RowHeaderCell>
                <button className="botao" type="submit" onClick={() => handleSubmit(() => onSubmit(transaction.id))()}>Deletar</button>
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
