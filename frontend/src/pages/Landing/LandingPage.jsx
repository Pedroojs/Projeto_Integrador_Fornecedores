// Importa os componentes principais da página
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';

// Importa o CSS específico da Landing Page
import './LandingPage.css';

// Componente principal da Landing Page
export default function LandingPages() {
  return (
    <div className="landing">
      {/* Cabeçalho fixo no topo */}
      <Header />

      {/* Sessão principal — Hero */}
      <Hero />

      {/* Seção de funcionalidades */}
      <section className="section" id="funcionalidades">
        <h2>Funcionalidades</h2>
        <p>Controle total de estoque, fornecedores e movimentações</p>

        {/* Cards da seção */}
        <div className="cards">
          <div className="card">Crud Completo de Produtos </div>
          <div className="card">Gestão de Fornecedores </div>
          <div className="card">Registro de Movimentações </div>
          <div className="card">Relatórios Atualizados </div>
        </div>
      </section>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
