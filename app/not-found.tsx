// Imports Next plugins
import Link from 'next/link'

// Imports Components
import { Button } from '@/app/components/Button'
import { HiArrowNarrowLeft } from 'react-icons/hi'

// Component
export default function NotFound() {
  
  // JSX Component
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-bold text-blue-ribbon">404</h1>
      <h2 className="text-3xl font-medium text-pale-sky-400 mb-4">
        Page non trouvée
      </h2>
      <Link href="/">
        <Button>
          <HiArrowNarrowLeft size={20} />
          Retour à la page d&apos;Accueil
        </Button>
      </Link>
    </div>
  )
}