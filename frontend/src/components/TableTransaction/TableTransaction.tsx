import axios from "axios";
import React, { useEffect, useState } from "react";
import './TableTransaction.css';
import { COLUMNS } from "./Columns";
import { Table } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

interface Transaction {
  id: number;
  value: number;
  observation: string;
  date: string;
  type: string;
}

export const TableTransaction = () => {
  const [data, setData] = useState<Transaction[]>([]);
  const { handleSubmit } = useForm();

  useEffect(() => {
    axios.get('http://localhost:8080/get')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  const onSubmit = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:8080/delete/${id}`);

      if (response.status == 200) {
        console.log('Dados enviados com sucesso!');
        setData((prevData) => prevData.filter(transaction => transaction.id !== id));
      } else {
        console.error('Erro ao enviar os dados:', response.statusText);
      }
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
        {data.length > 0 ? (
          data.map((transaction) => (
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


      <ul>
        {data.map((transaction => (
          <li key={transaction.id}>{transaction.value}</li>
        )
        ))}
      </ul>
    </div>
  );
};
