// App.jsx
import { ProfileCard } from './components/ProfileCard';
import './App.css';
export default function App() {
  // 1. Nossa "Base de Dados" fictícia (Array de Objetos)
  const profiles = [
    {
      id: 1,
      name: "kiko loureiro",
      role: "guitarrista Front-end",
      status: "online",
      isVerified: true,
      bio: "Apaixonado por React e CSS moderno."
    },
    {
      id: 2,
      name: "dave mustaine",
      role: "signer",
      status: "offline",
      isVerified: false
      // Bio está ausente aqui! O ?? vai entrar em ação.
    },
    {
      id: 2,
      name: "Eddie van halen",
      role: "De signer",
      status: "offline",
      isVerified: false
      // Bio está ausente aqui! O ?? vai entrar em ação.
    },
    // ... outros perfis
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Minha Rede de Contatos</h1>
        <p>Conectando talentos no universo observável</p>
      </header>

      <div className="cards-grid">
        {/* 2. Transformando os dados em Componentes! */}
        {profiles.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            role={user.role}
            status={user.status}
          />
        ))}
      </div>
    </div>
  );
}