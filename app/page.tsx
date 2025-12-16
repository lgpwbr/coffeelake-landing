'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header/Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Mobile */}
          <div className="flex md:hidden justify-between items-center">
            {/* Botão Hambúrguer */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-900 text-2xl focus:outline-none"
            >
              ☰
            </button>
            
            {/* Logo Centralizada */}
            <Image src="/images/111.png" alt="CoffeeLake Logo" width={40} height={40} className="object-contain" />
            
            {/* Espaço vazio para manter logo centralizada */}
            <div className="w-8"></div>
          </div>
          
          {/* Desktop */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image src="/images/111.png" alt="CoffeeLake Logo" width={50} height={50} className="object-contain" />
            </div>
            <div className="flex gap-8">
              <a href="#about" className="text-gray-900 hover:text-blue-600 transition">Sobre</a>
              <a href="#products" className="text-gray-900 hover:text-blue-600 transition">Produtos</a>
              <a href="#testimonials" className="text-gray-900 hover:text-blue-600 transition">Depoimentos</a>
              <a href="#faq" className="text-gray-900 hover:text-blue-600 transition">FAQ</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 transition">Contato</a>
            </div>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
              Compre Aqui
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Lateral Mobile */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="p-6 bg-white h-full">
          {/* Botão Fechar */}
          <button 
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-gray-900 mb-8 hover:text-blue-600"
          >
            ×
          </button>
          
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image src="/images/111.png" alt="CoffeeLake Logo" width={60} height={60} className="object-contain" />
          </div>
          
          {/* Links */}
          <div className="flex flex-col gap-6">
            <a 
              href="#about" 
              onClick={() => setMenuOpen(false)}
              className="text-lg text-gray-900 hover:text-blue-600 transition py-2 border-b border-gray-200"
            >
              Sobre
            </a>
            <a 
              href="#products"
              onClick={() => setMenuOpen(false)} 
              className="text-lg text-gray-900 hover:text-blue-600 transition py-2 border-b border-gray-200"
            >
              Produtos
            </a>
            <a 
              href="#testimonials"
              onClick={() => setMenuOpen(false)} 
              className="text-lg text-gray-900 hover:text-blue-600 transition py-2 border-b border-gray-200"
            >
              Depoimentos
            </a>
            <a 
              href="#faq"
              onClick={() => setMenuOpen(false)} 
              className="text-lg text-gray-900 hover:text-blue-600 transition py-2 border-b border-gray-200"
            >
              FAQ
            </a>
            <a 
              href="#contact"
              onClick={() => setMenuOpen(false)} 
              className="text-lg text-gray-900 hover:text-blue-600 transition py-2 border-b border-gray-200"
            >
              Contato
            </a>
            
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition mt-4">
              Compre Aqui
            </button>
          </div>
        </div>
      </div>

      {/* Overlay (fundo escuro quando menu aberto) */}
      {menuOpen && (
        <div 
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
        ></div>
      )}

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 min-h-screen flex items-start">
        {/* Imagem de fundo para MOBILE */}
        <div className="absolute inset-0 md:hidden">
          <Image 
            src="/images/hero-mobile.png" 
            alt="Coffee Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Imagem de fundo para DESKTOP */}
        <div className="absolute inset-0 hidden md:block">
          <Image 
            src="/images/hero-desktop.png" 
            alt="Coffee Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Conteúdo do Hero */}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            O Café dos Sonhos
          </h2>
          <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Grãos selecionados das melhores fazendas, torrados com perfeição para despertar seus sentidos.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition transform hover:scale-105 shadow-xl">
              Explorar Sabores
            </button>
            <button className="border-2 border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition shadow-xl">
              Nossa História
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center p-6 rounded-2xl hover:shadow-xl transition">
            <div className="text-6xl mb-4">☕</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">100% Arábica</h3>
            <p className="text-gray-700">Grãos premium selecionados a mão para garantir a melhor qualidade.</p>
          </div>
          <div className="text-center p-6 rounded-2xl hover:shadow-xl transition">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Sustentável</h3>
            <p className="text-gray-700">Cultivado de forma responsável, respeitando o meio ambiente.</p>
          </div>
          <div className="text-center p-6 rounded-2xl hover:shadow-xl transition">
            <div className="text-6xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Torra Artesanal</h3>
            <p className="text-gray-700">Processo cuidadoso que realça os sabores únicos de cada grão.</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">Nossos Produtos</h2>
          <p className="text-center text-gray-700 mb-12 text-lg">Descubra a linha completa CoffeeLake</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Produto 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
              <div className="relative h-80 w-full bg-white rounded-t-2xl flex items-center justify-center p-4">
                <Image 
                  src="/images/classic-blend-v1.png" 
                  alt="Classic Blend" 
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Classic Blend</h3>
                <p className="text-gray-700 mb-4">Nosso blend clássico com notas de chocolate e caramelo. Perfeito para começar o dia.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">R$ 29,90</span>
                  <Link href="/produto/classic-blend">
                    <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                      Ver Detalhes
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Produto 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
              <div className="relative h-80 w-full bg-white rounded-t-2xl flex items-center justify-center p-4">
                <Image 
                  src="/images/intense-roast-v1.png" 
                  alt="Intense Roast" 
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Intense Roast</h3>
                <p className="text-gray-700 mb-4">Torra escura e intensa com corpo marcante. Para quem busca sabor forte e encorpado.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">R$ 34,90</span>
                  <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>

            {/* Produto 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
              <div className="relative h-80 w-full bg-white rounded-t-2xl flex items-center justify-center p-4">
                <Image 
                  src="/images/premium-gold-v1.png" 
                  alt="Premium Gold" 
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Gold</h3>
                <p className="text-gray-700 mb-4">Edição especial com grãos raros. Notas florais e frutadas para paladares refinados.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">R$ 44,90</span>
                  <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-12">Momentos CoffeeLake</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden hover:scale-105 transition">
              <Image 
                src="/images/cafe-fumegante.png" 
                alt="Café fumegante" 
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden hover:scale-105 transition">
              <Image 
                src="/images/graos-cafe.png" 
                alt="Grãos de café" 
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden hover:scale-105 transition">
              <Image 
                src="/images/cafe-preparacao.png" 
                alt="Café sendo preparado" 
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden hover:scale-105 transition">
              <Image 
                src="/images/momento-aconchegante.png" 
                alt="Momento aconchegante" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-center text-gray-700 mb-12 text-lg">Experiências que aquecem o coração</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">"O melhor café que já provei! O Classic Blend virou parte essencial da minha manhã. Qualidade incomparável!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl">👨</div>
                <div>
                  <p className="font-bold text-gray-900">Carlos Silva</p>
                  <p className="text-sm text-gray-600">São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">"Simplesmente apaixonada pelo Premium Gold! O sabor é único e a entrega foi super rápida. Recomendo demais!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl">👩</div>
                <div>
                  <p className="font-bold text-gray-900">Ana Costa</p>
                  <p className="text-sm text-gray-600">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 mb-4 italic">"Qualidade excepcional! O Intense Roast tem um corpo incrível. A CoffeeLake se tornou minha marca favorita."</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl">👨</div>
                <div>
                  <p className="font-bold text-gray-900">Pedro Oliveira</p>
                  <p className="text-sm text-gray-600">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-center text-gray-700 mb-12 text-lg">Tudo que você precisa saber sobre a CoffeeLake</p>
          
          <div className="space-y-4">
            {/* Pergunta 1 */}
            <details className="group bg-blue-50 rounded-2xl p-6 cursor-pointer hover:bg-blue-100 transition">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>🌍 De onde vêm os grãos da CoffeeLake?</span>
                <span className="transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700">
                Nossos grãos são cuidadosamente selecionados das melhores fazendas do Brasil, principalmente de Minas Gerais e do Sul de Minas, regiões conhecidas mundialmente pela qualidade excepcional do café arábica.
              </p>
            </details>

            {/* Pergunta 2 */}
            <details className="group bg-blue-50 rounded-2xl p-6 cursor-pointer hover:bg-blue-100 transition">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>📦 Como funciona a entrega?</span>
                <span className="transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700">
                Entregamos para todo o Brasil! O prazo varia de 3 a 7 dias úteis dependendo da região. Frete grátis para compras acima de R$ 100. Embalamos com muito cuidado para garantir que o café chegue fresquinho na sua casa.
              </p>
            </details>

            {/* Pergunta 3 */}
            <details className="group bg-blue-50 rounded-2xl p-6 cursor-pointer hover:bg-blue-100 transition">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>☕ Como devo armazenar o café?</span>
                <span className="transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700">
                Mantenha o café em local fresco, seco e ao abrigo da luz. Após abrir a embalagem, transfira para um recipiente hermético. Assim você preserva o aroma e o sabor por até 30 dias. Não guarde na geladeira!
              </p>
            </details>

            {/* Pergunta 4 */}
            <details className="group bg-blue-50 rounded-2xl p-6 cursor-pointer hover:bg-blue-100 transition">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>🔄 Posso trocar ou devolver?</span>
                <span className="transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700">
                Sim! Você tem até 7 dias após o recebimento para solicitar troca ou devolução, conforme o Código de Defesa do Consumidor. Se não ficar satisfeito com o produto, entre em contato conosco.
              </p>
            </details>

            {/* Pergunta 5 */}
            <details className="group bg-blue-50 rounded-2xl p-6 cursor-pointer hover:bg-blue-100 transition">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>💳 Quais formas de pagamento vocês aceitam?</span>
                <span className="transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700">
                Aceitamos cartão de crédito (até 3x sem juros), débito, Pix e boleto bancário. O pagamento é processado de forma 100% segura através do Mercado Pago.
              </p>
            </details>

            {/* Pergunta 6 */}
            <details className="group bg-blue-50 rounded-2xl p-6 cursor-pointer hover:bg-blue-100 transition">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 list-none">
                <span>🌱 O café é sustentável?</span>
                <span className="transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-700">
                Absolutamente! Trabalhamos apenas com fazendas certificadas que praticam agricultura sustentável, respeitam o meio ambiente e valorizam os produtores locais. Nossa embalagem também é 100% reciclável.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-gray-700 mb-8 text-lg">Tem alguma dúvida? Estamos aqui para ajudar!</p>
          
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Seu Nome" 
              className="w-full px-6 py-4 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:outline-none"
            />
            <input 
              type="email" 
              placeholder="Seu E-mail" 
              className="w-full px-6 py-4 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:outline-none"
            />
            <textarea 
              placeholder="Sua Mensagem" 
              rows={5}
              className="w-full px-6 py-4 rounded-3xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none"
            ></textarea>
            <button className="bg-blue-900 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition transform hover:scale-105">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Image src="/images/111.png" alt="CoffeeLake" width={60} height={60} className="object-contain" />
          </div>
          <h2 className="text-3xl font-bold mb-4">CoffeeLake</h2>
          <p className="mb-6">O café que transforma seus momentos</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-blue-300 transition">Instagram</a>
            <a href="#" className="hover:text-blue-300 transition">Facebook</a>
            <a href="#" className="hover:text-blue-300 transition">Twitter</a>
          </div>
          <p className="text-blue-200">© 2025 CoffeeLake. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}