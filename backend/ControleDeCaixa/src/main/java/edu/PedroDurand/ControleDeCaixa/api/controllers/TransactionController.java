package edu.PedroDurand.ControleDeCaixa.api.controllers;

import edu.PedroDurand.ControleDeCaixa.application.dto.CreateTransaction;
import edu.PedroDurand.ControleDeCaixa.application.services.TransactionService;
import edu.PedroDurand.ControleDeCaixa.domain.models.Transaction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TransactionController {
    private final TransactionService service;

    public TransactionController(TransactionService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public ResponseEntity addTransaction(@RequestBody CreateTransaction request){
        this.service.addTransaction(request);
        return ResponseEntity.ok("Movimentação efetivada");
    }

    @GetMapping("/get")
    public ResponseEntity<List<Transaction>> getAll(){
        return ResponseEntity.ok(this.service.getAllTransaction());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id){
        this.service.deleteTransaction(id);
        return ResponseEntity.ok("Transação deletada");
    }

}
