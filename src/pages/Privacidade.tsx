import Navbar from "@/components/Navbar";

const Privacidade = () => (
  <>
    <Navbar />
    <main className="bg-background pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto font-body text-foreground/90 leading-relaxed space-y-5">
        <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-2">Política de Privacidade</h1>
        <p className="text-sm text-muted-foreground">Última atualização: outubro de 2026</p>

        <p>
          Esta política explica como a New Age Derma, clínica do Dr. Fabricio Dall'Igna, trata os dados
          pessoais enviados por este site, de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
        </p>

        <h2 className="font-display text-2xl text-foreground pt-4">Quais dados coletamos</h2>
        <p>
          Quando você usa o formulário de agendamento, coletamos seu <strong>nome</strong> e seu
          <strong> número de WhatsApp</strong>. Também usamos cookies e tecnologias semelhantes do Google
          (Google Ads, Google Analytics e Google Tag Manager) e da Meta para medir visitas e o resultado dos anúncios.
        </p>

        <h2 className="font-display text-2xl text-foreground pt-4">Para que usamos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Entrar em contato com você para agendar ou confirmar sua consulta.</li>
          <li>
            Medir quais anúncios geram agendamentos. Para isso, o telefone pode ser enviado ao Google de forma
            criptografada (hash), sem que o Google tenha acesso ao número em texto.
          </li>
        </ul>
        <p>Não vendemos seus dados e não os usamos para outras finalidades.</p>

        <h2 className="font-display text-2xl text-foreground pt-4">Por quanto tempo guardamos</h2>
        <p>
          Os dados ficam guardados pelo tempo necessário para o atendimento e para cumprir obrigações legais
          e regulatórias da atividade médica.
        </p>

        <h2 className="font-display text-2xl text-foreground pt-4">Seus direitos</h2>
        <p>
          Você pode pedir a qualquer momento acesso, correção ou exclusão dos seus dados, ou retirar seu
          consentimento, pelo WhatsApp (47) 99154-9098.
        </p>

        <h2 className="font-display text-2xl text-foreground pt-4">Dados de saúde</h2>
        <p>
          Informações sobre sua saúde não são coletadas por este site. Elas são tratadas apenas durante o
          atendimento médico, com sigilo profissional.
        </p>
      </article>
    </main>
  </>
);

export default Privacidade;
