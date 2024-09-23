package edu.PedroDurand.ControleDeCaixa.infra.repository;

import edu.PedroDurand.ControleDeCaixa.domain.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
