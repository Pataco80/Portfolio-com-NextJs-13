import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type SectionLayoutProps = {
	/**
	 * Balise de l'element externe (semantique : "section", "header", "footer", "main"...).
	 * Evite le div-sur-div quand le parent voudrait un wrapper semantique.
	 */
	as?: ElementType
	/**
	 * The section size.
	 * sm = 896px
	 * base = 1024px
	 * lg = 1152px
	 */
	size?: 'sm' | 'base' | 'lg' | 'full'
	/**
	 * The variant of the section.
	 * default = default background and foreground
	 * alt-section = alternate section background (pale-sky-950)
	 * card = card background and card foreground
	 * primary = primary background and primary foreground
	 * invert = foreground background and background foreground
	 * image = background image with foreground text. The background image will be blured.
	 */
	variant?: 'default' | 'alt-section' | 'card' | 'primary' | 'invert' | 'image' | 'transparent'
	/**
	 * The class name of the element that contains colors.
	 */
	containerClassName?: string
	/**
	 * Calque(s) de fond rendu(s) en absolute, full-bleed derriere le contenu
	 * (halo, motifs, image...). Active relative + overflow-hidden sur l'externe.
	 */
	backdrop?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const SectionLayout = ({
	as: Tag = 'div',
	size = 'base',
	variant = 'default',
	className,
	containerClassName,
	backdrop,
	children,
	...props
}: SectionLayoutProps) => {
	return (
		<Tag
			className={cn(
				'relative',
				backdrop && 'overflow-hidden',
				{
					'bg-background text-foreground': variant === 'default',
					'bg-alt-section text-foreground': variant === 'alt-section',
					'bg-card text-card-foreground': variant === 'card',
					'bg-primary text-primary-foreground': variant === 'primary',
					'bg-foreground text-background': variant === 'invert',
					'text-foreground backdrop-blur-sm backdrop-brightness-75': variant === 'image',
					'text-foreground bg-transparent': variant === 'transparent',
				},
				containerClassName,
			)}
			{...props}>
			{backdrop && (
				<div aria-hidden className='absolute inset-0 pointer-events-none'>
					{backdrop}
				</div>
			)}
			<div
				className={cn(
					'relative z-10 m-auto px-4 py-20 lg:py-28',
					{
						'max-w-4xl': size === 'sm',
						'max-w-5xl': size === 'base',
						'max-w-6xl': size === 'lg',
						'w-full': size === 'full',
					},
					className,
				)}>
				{children}
			</div>
		</Tag>
	)
}
