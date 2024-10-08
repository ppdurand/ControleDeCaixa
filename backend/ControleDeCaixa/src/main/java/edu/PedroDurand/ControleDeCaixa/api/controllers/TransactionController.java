package edu.PedroDurand.ControleDeCaixa.api.controllers;

import edu.PedroDurand.ControleDeCaixa.application.dto.CreateTransaction;
import edu.PedroDurand.ControleDeCaixa.application.services.TransactionService;
import edu.PedroDurand.ControleDeCaixa.domain.models.Transaction;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TransactionController {
    private final TransactionService service;

    public TransactionController(TransactionService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public ResponseEntity addTransaction(@RequestBody @Valid CreateTransaction request){
        this.service.addTransaction(request);
        return ResponseEntity.ok("Movimentação efetivada");
    }

    @GetMapping("/get")
    public ResponseEntity<List<Transaction>> getAll(){
        return ResponseEntity.ok(this.service.getAllTransaction());
    }

    @GetMapping("/getSum")
    public ResponseEntity<List<Double>> getSum(){
        return ResponseEntity.ok(this.service.getSumOfTransactions());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id){
        this.service.deleteTransaction(id);
        return ResponseEntity.ok("Transação deletada");
    }

}
