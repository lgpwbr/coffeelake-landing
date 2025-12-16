'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ClassicBlendPage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    '/images/classic-blend-1.png',
    '/images/classic-blend-2.png',
    '/images/classic-blend-3.png'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="CoffeeLake Logo" width={50} height={50} className="object-contain" />
            <h1 className="text-3xl font-bold text-blue-900">CoffeeLake</h1>
          </Link>
          <Link href="/" className="text-gray-900 hover:text-blue-600 transition">
            ← Voltar para Home
          </Link>
        </div>
      </nav>

      {/* Produto */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Carrossel de Imagens */}
            <div className="space-y-4">
              {/* Imagem Principal */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden bg-white shadow-2xl">
                <Image 
                  src={images[currentImage]} 
                  alt={`Classic Blend - Imagem ${currentImage + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Botões de Navegação */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
                >
                  ◀
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
                >
                  ▶
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition ${
                        currentImage === index ? 'bg-blue-900' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Miniaturas */}
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative h-32 rounded-lg overflow-hidden transition ${
                      currentImage === index ? 'ring-4 ring-blue-900' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image 
                      src={img} 
                      alt={`Miniatura ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Informações do Produto */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4">Classic Blend</h1>
                <p className="text-2xl text-blue-900 font-semibold mb-6">R$ 29,90</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nosso blend clássico é a escolha perfeita para começar o dia com energia e sabor. 
                  Cuidadosamente elaborado com grãos 100% arábica de alta altitude, oferece notas marcantes 
                  de chocolate e caramelo que encantam o paladar.
                </p>
              </div>

              {/* Características */}
              <div className="bg-blue-50 rounded-2xl p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Características</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Torra</p>
                    <p className="font-semibold text-gray-900">Média</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Intensidade</p>
                    <p className="font-semibold text-gray-900">7/10</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Acidez</p>
                    <p className="font-semibold text-gray-900">Média</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Corpo</p>
                    <p className="font-semibold text-gray-900">Médio</p>
                  </div>
                </div>
              </div>

              {/* Notas de Sabor */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notas de Sabor</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-amber-100 text-amber-900 px-4 py-2 rounded-full font-semibold">🍫 Chocolate</span>
                  <span className="bg-amber-100 text-amber-900 px-4 py-2 rounded-full font-semibold">🍯 Caramelo</span>
                  <span className="bg-amber-100 text-amber-900 px-4 py-2 rounded-full font-semibold">🌰 Nozes</span>
                </div>
              </div>

              {/* Botões */}
              <div className="space-y-4 pt-6">
                <button className="w-full bg-blue-900 text-white px-8 py-5 rounded-full text-xl font-semibold hover:bg-blue-800 transition transform hover:scale-105 shadow-xl">
                  🛒 Adicionar ao Carrinho - R$ 29,90
                </button>
                <button className="w-full border-2 border-blue-900 text-blue-900 px-8 py-5 rounded-full text-xl font-semibold hover:bg-blue-50 transition">
                  💬 Falar com Especialista
                </button>
              </div>

              {/* Informações Adicionais */}
              <div className="border-t pt-6 space-y-3 text-gray-700">
                <p>✅ Frete grátis acima de R$ 100</p>
                <p>✅ Entrega em 3-7 dias úteis</p>
                <p>✅ Garantia de frescor</p>
                <p>✅ Troca grátis em 7 dias</p>
              </div>
            </div>
          </div>

          {/* Descrição Completa */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre o Classic Blend</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                O Classic Blend CoffeeLake é mais do que um café - é uma experiência sensorial cuidadosamente 
                elaborada para tornar cada momento especial. Selecionamos grãos das melhores fazendas do Sul 
                de Minas, região reconhecida mundialmente pela excelência na produção de café arábica.
              </p>
              <p>
                Nosso processo de torra média realça as características naturais dos grãos, criando um equilíbrio 
                perfeito entre doçura e corpo. O resultado é um café versátil, ideal tanto para apreciadores 
                experientes quanto para quem está começando a descobrir o mundo dos cafés especiais.
              </p>
              <p>
                Cada embalagem de 250g é cuidadosamente selada para preservar o aroma e frescor até chegar na 
                sua casa. Recomendamos o consumo em até 30 dias após a abertura para aproveitar ao máximo todas 
                as nuances de sabor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Image src="/images/logo-sem-fundo.png" alt="CoffeeLake" width={60} height={60} className="object-contain" />
          </div>
          <h2 className="text-3xl font-bold mb-4">CoffeeLake</h2>
          <p className="mb-6">O café que transforma seus momentos</p>
          <p className="text-blue-200">© 2024 CoffeeLake. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}