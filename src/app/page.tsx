'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [question, setQuestion] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Encode a pergunta para passar como parâmetro na URL
    const encodedQuestion = encodeURIComponent(question);
    router.push(`/resposta?question=${encodedQuestion}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 animate-fade-in">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-4 animate-float">
            Com Quem Eu Falo?
          </h1>
          <p className="text-xl text-blue-700 mb-8">
            Faça sua pergunta e veja quem possivelmente tem a resposta.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Digite sua pergunta aqui..."
              className="input-field h-32 resize-none glass-effect"
              required
            />
            <button
              type="submit"
              className="button-primary absolute bottom-4 right-4"
            >
              Enviar
            </button>
          </div>
        </form>

        <div className="mt-12 text-center text-blue-600">
          <p className="animate-pulse-slow">
            Suas perguntas serão analisadas e direcionadas para as pessoas mais adequadas
          </p>
        </div>
      </div>
    </main>
  );
} 