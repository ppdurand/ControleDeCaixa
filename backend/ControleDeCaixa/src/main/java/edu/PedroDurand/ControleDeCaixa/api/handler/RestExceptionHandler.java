package edu.PedroDurand.ControleDeCaixa.api.handler;

import edu.PedroDurand.ControleDeCaixa.api.exceptions.FutureDateException;
import edu.PedroDurand.ControleDeCaixa.api.exceptions.IdNotFoundException;
import edu.PedroDurand.ControleDeCaixa.api.exceptions.InvalidTransactionTypeException;
import edu.PedroDurand.ControleDeCaixa.api.exceptions.InvalidValueException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(IdNotFoundException.class)
    public ResponseEntity<String> IdNotFound(IdNotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    }

    @ExceptionHandler(InvalidValueException.class)
    public ResponseEntity<String> InvalidValue(InvalidValueException e){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

    @ExceptionHandler(FutureDateException.class)
    public ResponseEntity<String> FutureDate(FutureDateException e){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

    @ExceptionHandler(InvalidTransactionTypeException.class)
    public ResponseEntity<String> FutureDate(InvalidTransactionTypeException e){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }
}
