package edu.PedroDurand.ControleDeCaixa.application.dto;

import edu.PedroDurand.ControleDeCaixa.domain.models.TransactionType;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record CreateTransaction(Double value, LocalDate date, String observation, TransactionType type){
}
