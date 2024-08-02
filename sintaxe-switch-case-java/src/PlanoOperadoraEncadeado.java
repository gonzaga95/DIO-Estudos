public class PlanoOperadoraEncadeado {
    public static void main(String[] args) {
        String plano = "T"; // (T) turbo, (M) mídia, (B) básico.

        if (plano.equals("B")) {
            System.out.println("100 minutos de ligações para qualquer operadora");

            }
        else if (plano.equals("M")) {
            System.out.println("WhatsApp e Instagram com dados ilimitados");
            System.out.println("100 minutos de ligações para qualquer operadora");
        } else if (plano.equals("T")) {
            System.out.println("5 GB de dados para YouTube");
            System.out.println("WhatsApp e Instagram com dados ilimitados");
            System.out.println("100 minutos de ligações para qualquer operadora");
        }
    }
}
