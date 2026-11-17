import { ButtonLink } from "../components/Button";
import { Container } from "../components/Container";

export default function NotFound() {
  return (
    <Container className="grid min-h-[80dvh] place-items-center pt-16 text-center">
      <div>
        <p className="font-mono text-sm text-accent">// erro 404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Página não encontrada</h1>
        <p className="mt-4 text-muted">O endereço que você acessou não existe ou foi movido.</p>
        <ButtonLink to="/" className="mt-8">Voltar para o início</ButtonLink>
      </div>
    </Container>
  );
}
