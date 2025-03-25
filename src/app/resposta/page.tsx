import { Suspense } from 'react';
import RespostaContent from './RespostaContent';

export default function RespostaPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <Suspense fallback={
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Com Quem Eu Falo?
          </h1>
          <p className="text-xl text-blue-700">
            Carregando...
          </p>
        </div>
      }>
        <RespostaContent />
      </Suspense>
    </main>
  );
} 