import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Shield, Bug, Rat } from 'lucide-react';

const Header = () => (
  <header className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Marina Hygiène</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Accueil</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#about" className="hover:underline">À propos</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="bg-blue-100 py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Services d'Hygiène Professionnels pour Votre Espace de Travail</h2>
      <p className="text-xl mb-8">Assurer un environnement propre, sûr et sain pour votre entreprise</p>
      <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Obtenir un Devis</a>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard 
          icon={Shield} 
          title="Stérilisation" 
          description="Stérilisation approfondie des surfaces pour éliminer les bactéries et virus nocifs."
        />
        <ServiceCard 
          icon={Bug} 
          title="Contrôle des Insectes" 
          description="Élimination efficace et prévention des infestations d'insectes dans votre espace de travail."
        />
        <ServiceCard 
          icon={Rat} 
          title="Contrôle des Rongeurs" 
          description="Solutions professionnelles pour garder vos locaux exempts de rats et autres rongeurs."
        />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-blue-50 py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">À Propos de Marina Hygiène</h2>
      <p className="text-lg text-center max-w-3xl mx-auto">
        Marina Hygiène est un fournisseur de premier plan de services d'hygiène professionnels pour les espaces de travail publics et privés, les restaurants et divers autres établissements. Avec des années d'expérience et une équipe dévouée d'experts, nous veillons à ce que votre environnement reste propre, sûr et conforme à toutes les réglementations sanitaires.
      </p>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous enverriez généralement les données du formulaire à un serveur
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message. Nous vous recontacterons bientôt !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Envoyer le Message</button>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Informations de Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <PhoneCall className="w-6 h-6 mr-2 text-blue-600" />
                  <span>+33 (0)1 23 45 67 89</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-blue-600" />
                  <span>info@marinahygiene.fr</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                  <span>123 Rue de la Propreté, 75001 Paris, France</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-blue-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Marina Hygiène. Tous droits réservés.</p>
    </div>
  </footer>
);

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
