import java.util.Scanner;
import java.lang.Math;

public class ContaTerminal {

public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    System.out.println("""
            ###################################
            Olá, bem-vinde ao sistema bancário
            Para utilizar, você deve criar a sua conta, conforme instruções a seguir.
            """);

    System.out.println("Insira o seu nome completo: ");
    String nome = scanner.nextLine().toUpperCase();

    System.out.println("Insira o valor do seu primeiro depósito: ");
    double valorInicial = scanner.nextDouble();

    var agenciaNumeros = Math.round(Math.random() * 10000);
    String agencia = Long.toString(agenciaNumeros);
    agencia = agencia.substring(0, 3) + "-" + agencia.substring(3);

    var numeroConta = Math.round(Math.random() * 10000);

    System.out.println("Olá, " + nome +
            " obrigado por criar uma conta em nosso banco, sua agência é "
            + agencia +
            ", conta "+ numeroConta +
            " e seu saldo "+ valorInicial +
            " já está disponível para saque");

}


        }