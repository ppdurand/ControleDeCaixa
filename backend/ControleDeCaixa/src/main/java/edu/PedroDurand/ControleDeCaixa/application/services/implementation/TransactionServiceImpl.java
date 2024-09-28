package edu.PedroDurand.ControleDeCaixa.application.services.implementation;

import edu.PedroDurand.ControleDeCaixa.api.exceptions.IdNotFoundException;
import edu.PedroDurand.ControleDeCaixa.api.validator.TransactionValidator;
import edu.PedroDurand.ControleDeCaixa.application.dto.CreateTransaction;
import edu.PedroDurand.ControleDeCaixa.application.services.TransactionService;
import edu.PedroDurand.ControleDeCaixa.domain.models.Transaction;
import edu.PedroDurand.ControleDeCaixa.domain.models.TransactionType;
import edu.PedroDurand.ControleDeCaixa.infra.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class TransactionServiceImpl implements TransactionService {
    private final TransactionRepository repository;
    private final TransactionValidator validator;

    public TransactionServiceImpl(TransactionRepository repository, TransactionValidator validator) {
        this.repository = repository;
        this.validator = validator;
    }

    @Override
    public void addTransaction(CreateTransaction request) {
        validator.validateTransaction(request);

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
            throw new IdNotFoundException();
        }
        repository.deleteById(id);
    }

    @Override
    public List<Double> getSumOfTransactions() {
        List<Double> sum = new ArrayList<>();

        Double receita = getAllTransaction().stream()
                        .filter(e ->  (TransactionType.RECEITA).equals(e.getType()))
                        .mapToDouble(Transaction::getValue)
                        .sum();
        sum.add(receita);

        Double despesa = getAllTransaction().stream()
                .filter(e -> (TransactionType.DESPESA).equals(e.getType()))
                .mapToDouble(Transaction::getValue)
                .sum();
        sum.add(despesa);

        return sum;
    }
}
