package edu.PedroDurand.ControleDeCaixa.application.services.implementation;

import edu.PedroDurand.ControleDeCaixa.application.dto.CreateTransaction;
import edu.PedroDurand.ControleDeCaixa.application.services.TransactionService;
import edu.PedroDurand.ControleDeCaixa.domain.models.Transaction;
import edu.PedroDurand.ControleDeCaixa.domain.models.TransactionType;
import edu.PedroDurand.ControleDeCaixa.infra.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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
        return this.repository.findAll();
    }

    @Override
    public void deleteTransaction(Long id) {
        Optional<Transaction> optional = this.repository.findById(id);
        if(optional.isEmpty()){
            throw new RuntimeException("ID nao encontrado");
        }
        repository.deleteById(id);
    }
}
