# Instruções para StackBlitz

Este projeto foi adaptado para funcionar no StackBlitz. Siga estas instruções:

## Estrutura do Projeto

```
├── src/                 # Código fonte React
│   ├── components/      # Componentes UI
│   ├── hooks/           # Hooks customizados
│   ├── lib/             # Utilitários
│   ├── pages/           # Páginas da aplicação
│   ├── App.jsx          # Componente principal
│   ├── index.css        # Estilos globais (Tailwind)
│   └── main.jsx         # Entry point
├── attached_assets/     # Imagens e assets
├── index.html           # HTML principal
├── vite.config.js       # Configuração Vite
├── tailwind.config.js   # Configuração Tailwind
├── postcss.config.js    # Configuração PostCSS
└── package.json         # Dependências
```

## Para usar no StackBlitz

1. **Exclua a pasta `server/`** - Esta pasta só é usada no Replit
2. **Atualize o package.json** com estes scripts:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```
3. **Execute `npm install`** para instalar as dependências
4. **Execute `npm run dev`** para iniciar o servidor de desenvolvimento

## Tecnologias

- React 18
- Vite
- Tailwind CSS
- Radix UI
- React Hook Form
- Wouter (routing)
- localStorage para persistência de dados
