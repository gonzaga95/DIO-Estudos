public class PlanoOperadora {
    public static void main(String[] args) {
        String plano = "T"; // (T) turbo, (M) mídia, (B) básico.

        switch (plano) {
            case "T":
                System.out.println("5 GB para YouTube");
            case "M":
                System.out.println("WhatsApp e Instagram com dados ilimitados");
            case "B":
                System.out.println("100 minutos de ligações para qualquer operadora");
        }
    }
}
