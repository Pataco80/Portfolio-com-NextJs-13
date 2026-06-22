// Imports React
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

// Imports Utils for TailwindCSS
import { cn } from '@/lib/utils'

// Styles partagés (button & link)
const buttonStyles =
	'bg-blue-ribbon-800 text-white px-4 py-3 flex items-center gap-3 rounded-lg shadow-button hover:bg-blue-ribbon-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-ribbon-300 focus-visible:ring-offset-2 focus-visible:ring-offset-pale-sky-900 transition-all disabled:opacity-50'

// Props propres au composant
type ButtonOwnProps = {
	children: ReactNode
	className?: string
	/** Si fourni, le composant est rendu en lien <a> au lieu d'un <button>. */
	href?: string
	/** Pour un href externe : ouvre dans un nouvel onglet + rel sécurisé. */
	external?: boolean
}

// On accepte les attributs HTML de <button> ET de <a> (les call sites ne passent que le pertinent)
type ButtonProps = ButtonOwnProps &
	Omit<
		ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>,
		keyof ButtonOwnProps
	>

// Component
export const Button = ({ children, className, href, external, ...props }: ButtonProps) => {
	const classes = cn(buttonStyles, className)

	// Rendu en lien <a> si un href est fourni
	if (href) {
		const externalAttrs = external
			? { target: '_blank', rel: 'noopener noreferrer' }
			: {}
		return (
			<a href={href} {...externalAttrs} {...props} className={classes}>
				{children}
			</a>
		)
	}

	// Rendu en <button> sinon
	return (
		<button {...props} className={classes}>
			{children}
		</button>
	)
}
