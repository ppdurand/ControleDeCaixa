package edu.PedroDurand.ControleDeCaixa.application.services.implementation;

import edu.PedroDurand.ControleDeCaixa.application.dto.CreateTransaction;
import edu.PedroDurand.ControleDeCaixa.application.services.TransactionService;
import edu.PedroDurand.ControleDeCaixa.domain.models.Transaction;
import edu.PedroDurand.ControleDeCaixa.domain.models.TransactionType;
import edu.PedroDurand.ControleDeCaixa.infra.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {
    private final TransactionRepository repository;

    public TransactionServiceImpl(TransactionRepository repository) {
        this.repository = repository;
    }

    @Override
    public void addTransaction(CreateTransaction request) {
        Transaction transaction = new Transaction(request.value(), request.date(), request.observation(), request.type());
        this.repository.save(transaction);
    }

    @Override
    public List<Transaction> getAllTransaction() {
        return null;
    }

    @Override
    public void deleteTransaction(Long id) {

    }
}
