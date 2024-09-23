package edu.PedroDurand.ControleDeCaixa.api.exceptions;

public class FutureDateException extends RuntimeException {
    public FutureDateException() {
        super("A data não pode ser futura, tento colocar a data atual ou uma que já passou");
    }

    public FutureDateException(String message) {
        super(message);
    }
}
