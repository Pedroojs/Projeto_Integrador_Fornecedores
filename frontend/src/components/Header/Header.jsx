import { Button } from 'antd';
import './Header.css';

export default function Header() {
  return (
    // Cabeçalho fixo no topo da página
    <header className="header">
      {/* Logo / nome da aplicação */}
      <div className="header-left">
        <h2 className="logo">BusinessHub</h2>
      </div>

      {/* Menu de navegação */}
      <nav className="header-nav">
        <a href="#como-funciona">Como funciona</a>
        <a href="#funcionalidades">Funcionalidades</a>
        <a href="#sobre">Sobre</a>
      </nav>

      {/* Botões de login */}
      <div className="header-actions">
        <Button type="text" href="/login">
          Entrar
        </Button>
      </div>
    </header>
  );
}
