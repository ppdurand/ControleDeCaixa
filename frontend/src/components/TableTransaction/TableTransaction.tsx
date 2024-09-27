import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import './TableTransaction.css';
import { COLUMNS } from "./Columns";
import { Table } from "@radix-ui/themes";

interface Transaction {
  id: number;
  value: number;
  observation: string;
  date: string;
  type: string;
}

export const TableTransaction: React.FC = () => {
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/get')
      .then(response => {
        console.log("Dados recebidos: ", response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);



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
      {data.length > 0 ? (
            data.map((transaction) => (
              <Table.Row key={transaction.id}>
                <Table.RowHeaderCell>{transaction.value}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{transaction.date}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{transaction.observation}</Table.RowHeaderCell>
                <Table.RowHeaderCell>{transaction.type}</Table.RowHeaderCell>
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
