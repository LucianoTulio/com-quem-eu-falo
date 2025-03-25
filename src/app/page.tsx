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
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Com Quem Eu Falo?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Faça sua pergunta e veja quem possivelmente tem a resposta.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Digite sua pergunta aqui..."
              className="w-full h-32 p-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none shadow-sm"
              required
            />
            <button
              type="submit"
              className="absolute bottom-4 right-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
            >
              Enviar
            </button>
          </div>
        </form>

        <div className="mt-12 text-center text-gray-500">
          <p>Suas perguntas serão analisadas e direcionadas para as pessoas mais adequadas</p>
        </div>
      </div>
    </main>
  );
} 