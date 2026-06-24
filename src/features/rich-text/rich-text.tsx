// Import React
import { ComponentProps } from 'react'

// JSX Plugins GraphCMS plugins
import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'

// Types Props
type RichTextProps = ComponentProps<typeof CMSRichText>

// Component
export const RichText = ({ ...props }: RichTextProps) => {
	// JSX Component
	return (
		<CMSRichText
			{...props}
			renderers={{
				p: ({ children }) => <p className='font-medium my-6'>{children}</p>,
				bold: ({ children }) => <b className='font-semibold text-foreground'>{children}</b>,
				ul: ({ children }) => (
					<ul className='list-disc list-inside pl-2 flex flex-col gap-1 -mt-3 marker:text-accent'>{children}</ul>
				),
				a: ({ children, openInNewTab, href, rel, ...props }) => (
					<a
						{...props}
						href={href}
						target={openInNewTab ? '_blank' : undefined}
						rel={openInNewTab ? 'noopener noreferrer' : rel}
						className='text-accent hover:text-accent/80 transition-colors underline underline-offset-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
						{children}
					</a>
				),
			}}
		/>
	)
}
