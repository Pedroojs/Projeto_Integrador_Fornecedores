import { Button } from 'antd';
import './Hero.css';

export default function Hero() {
  return (
    // Sessão inicial de destaque da página
    <section className="hero">
      {/* Título principal */}
      <h1>Controle de estoque simples, rápido e inteligente.</h1>

      {/* Descrição do sistema */}
      <p>
        Tenha total controle de produtos, fornecedores e movimentações em um
        único lugar. Relatórios automáticos e gestão profissional.
      </p>

      {/* Botão usando AntDesign */}
      <Button type="primary" size="large" href="/register">
        Criar conta Grátis
      </Button>
    </section>
  );
}
