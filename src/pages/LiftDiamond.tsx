import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function LiftDiamond() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Lift Diamond
              </h1>
              <p className="text-xl text-gray-600">
                Protocolo inovador de rejuvenescimento facial com tecnologia de radiofrequência
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">O que é?</h2>
              <p className="text-gray-700 text-lg mb-4">
                Lift Diamond é um protocolo avançado de tratamento facial que combina tecnologia de radiofrequência microfocada com sistemas de lifting não invasivos.
              </p>
              <p className="text-gray-700 text-lg">
                O procedimento estimula a produção de colágeno e elastina, proporcionando um efeito lifting imediato e resultados progressivos.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefícios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Lifting Facial</h3>
                    <p className="text-gray-600">Efeito lifting imediato e duradouro</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Redução de Rugas</h3>
                    <p className="text-gray-600">Diminui linhas de expressão e rugas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Firmeza de Pele</h3>
                    <p className="text-gray-600">Estimula produção de colágeno</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Não Invasivo</h3>
                    <p className="text-gray-600">Sem cirurgia, sem recuperação</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Funciona?</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Aplicação de Radiofrequência</h3>
                    <p className="text-gray-600">A tecnologia aquece as camadas profundas da pele de forma segura</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Estímulo de Colágeno</h3>
                    <p className="text-gray-600">O calor controlado estimula a produção natural de colágeno</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Efeito Lifting</h3>
                    <p className="text-gray-600">Resulta em lifting facial com aparência mais jovem e descansada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">Resultados</h2>
              <ul className="space-y-3 text-lg">
                <li>✓ Resultados visíveis a partir da 1ª sessão</li>
                <li>✓ Melhora progressiva com o tempo</li>
                <li>✓ Duração de 6 a 12 meses</li>
                <li>✓ Pode ser repetido conforme necessário</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}