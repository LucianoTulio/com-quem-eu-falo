'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

type MaritalStatus = 'casado' | 'namorando' | 'solteiro' | null;

export default function RespostaContent() {
  const [maritalStatus, setMaritalStatus] = useState<MaritalStatus>(null);
  const [question, setQuestion] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
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
    <div className="max-w-2xl w-full space-y-8 animate-fade-in">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-4 animate-float">
          Com Quem Eu Falo?
        </h1>
        <p className="text-xl text-blue-700 mb-8">
          {question || 'Sua pergunta aparecerá aqui'}
        </p>
      </div>

      {!maritalStatus ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-center mb-6 text-blue-800">
            Qual é seu estado civil?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setMaritalStatus('casado')}
              className="button-secondary p-4 glass-effect"
            >
              Casado(a)
            </button>
            <button
              onClick={() => setMaritalStatus('namorando')}
              className="button-secondary p-4 glass-effect"
            >
              Namorando
            </button>
            <button
              onClick={() => setMaritalStatus('solteiro')}
              className="button-secondary p-4 glass-effect"
            >
              Solteiro(a)
            </button>
          </div>
          <div className="mt-6">
            <button
              onClick={() => router.push('/')}
              className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <span>←</span> Voltar para fazer uma nova pergunta
            </button>
          </div>
        </div>
      ) : (
        <div className="glass-effect p-8 rounded-lg text-center animate-fade-in">
          <div className="text-6xl mb-4 animate-float">{answer?.emoji}</div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            {answer?.title}
          </h2>
          <p className="text-lg text-blue-700 mb-8">
            {answer?.description}
          </p>
          <div className="space-y-4">
            <p className="text-blue-600">
              Se {answer?.title.includes('mãe') ? 'sua mãe não souber' : 'isso não resolver'} → 
              Pergunte ao seu melhor amigo ou amiga. Eles sempre têm uma teoria maluca ou um palpite aleatório que pode fazer sentido.
            </p>
            <p className="text-blue-600">
              Se seu amigo também não souber → A resposta pode estar no Google… ou naquele tio que adora dar conselhos duvidosos em reuniões de família.
            </p>
            <p className="text-blue-600">
              Se nem o Google souber → A resposta não existe… ou então você acabou de descobrir um mistério da humanidade. Nesse caso, parabéns, você é um pioneiro do desconhecido!
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <button
              onClick={() => router.push('/')}
              className="button-primary"
            >
              Fazer Nova Pergunta
            </button>
            <div>
              <button
                onClick={() => setMaritalStatus(null)}
                className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105"
              >
                Voltar e escolher outro estado civil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 