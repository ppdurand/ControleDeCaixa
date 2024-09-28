package edu.PedroDurand.ControleDeCaixa.application.services;

import edu.PedroDurand.ControleDeCaixa.application.dto.CreateTransaction;
import edu.PedroDurand.ControleDeCaixa.domain.models.Transaction;

import java.util.List;

public interface TransactionService {
    void addTransaction(CreateTransaction request);
    List<Transaction> getAllTransaction();
    void deleteTransaction(Long id);

    List<Double> getSumOfTransactions();
}
