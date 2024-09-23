package edu.PedroDurand.ControleDeCaixa.api.validator;

import edu.PedroDurand.ControleDeCaixa.api.exceptions.FutureDateException;
import edu.PedroDurand.ControleDeCaixa.api.exceptions.InvalidTransactionTypeException;
import edu.PedroDurand.ControleDeCaixa.api.exceptions.InvalidValueException;
import edu.PedroDurand.ControleDeCaixa.application.dto.CreateTransaction;
import edu.PedroDurand.ControleDeCaixa.domain.models.TransactionType;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class TransactionValidator {
    private boolean isValidTransactionType(TransactionType type) {
        return TransactionType.DESPESA.equals(type) || TransactionType.RECEITA.equals(type);
    }
    public void validateTransaction(CreateTransaction request){
        if(request.value() <= 0){
            throw new InvalidValueException();
        }
        if(request.date().isAfter(LocalDate.now())){
            throw new FutureDateException();
        }
        if(!isValidTransactionType(request.type())){
            throw new InvalidTransactionTypeException();
        }
    }
}
