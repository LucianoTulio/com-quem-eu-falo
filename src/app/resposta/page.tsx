'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

type MaritalStatus = 'casado' | 'namorando' | 'solteiro' | null;

export default function RespostaPage() {
  const [maritalStatus, setMaritalStatus] = useState<MaritalStatus>(null);
  const [question, setQuestion] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Captura a pergunta da URL quando a página carrega
    const questionParam = searchParams.get('question');
    if (questionParam) {
      setQuestion(decodeURIComponent(questionParam));
    }
  }, [searchParams]);

  const getAnswer = (status: MaritalStatus) => {
    switch (status) {
      case 'casado':
        return {
          title: 'A resposta está com seu marido ou esposa!',
          description: 'Afinal, eles sempre sabem tudo (ou pelo menos acham que sabem).',
          emoji: '💑'
        };
      case 'namorando':
        return {
          title: 'A resposta provavelmente está com seu parceiro(a)!',
          description: 'Porque, convenhamos, eles já te conhecem melhor do que você mesmo.',
          emoji: '❤️'
        };
      case 'solteiro':
        return {
          title: 'A resposta está com a sua mãe!',
          description: 'Sim, ela sempre tem um palpite sobre tudo (e na maioria das vezes está certa).',
          emoji: '👩'
        };
      default:
        return null;
    }
  };

  const answer = getAnswer(maritalStatus);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Com Quem Eu Falo?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {question || 'Sua pergunta aparecerá aqui'}
          </p>
        </div>

        {!maritalStatus ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Qual é seu estado civil?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setMaritalStatus('casado')}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-blue-500"
              >
                Casado(a)
              </button>
              <button
                onClick={() => setMaritalStatus('namorando')}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-blue-500"
              >
                Namorando
              </button>
              <button
                onClick={() => setMaritalStatus('solteiro')}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-blue-500"
              >
                Solteiro(a)
              </button>
            </div>
            <div className="mt-6">
              <button
                onClick={() => router.push('/')}
                className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2"
              >
                <span>←</span> Voltar para fazer uma nova pergunta
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-4">{answer?.emoji}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {answer?.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {answer?.description}
            </p>
            <div className="space-y-4">
              <p className="text-gray-500">
                Se {answer?.title.includes('mãe') ? 'sua mãe não souber' : 'isso não resolver'} → 
                Pergunte ao seu melhor amigo ou amiga. Eles sempre têm uma teoria maluca ou um palpite aleatório que pode fazer sentido.
              </p>
              <p className="text-gray-500">
                Se seu amigo também não souber → A resposta pode estar no Google… ou naquele tio que adora dar conselhos duvidosos em reuniões de família.
              </p>
              <p className="text-gray-500">
                Se nem o Google souber → A resposta não existe… ou então você acabou de descobrir um mistério da humanidade. Nesse caso, parabéns, você é um pioneiro do desconhecido!
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <button
                onClick={() => router.push('/')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Fazer Nova Pergunta
              </button>
              <div>
                <button
                  onClick={() => setMaritalStatus(null)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Voltar e escolher outro estado civil
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 