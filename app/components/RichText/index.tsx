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
        p: ({ children }) => (
          <p className="font-medium my-6">{children}</p>
        ),
        bold: ({ children }) => (
          <b className="font-medium">{children}</b>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside pl-2 flex flex-col gap-1">
            {children}
          </ul>
        ),
        a: ({ children, openInNewTab, href, rel, ...props }) => (
          <a
            {...props}
            href={href}
            target={openInNewTab ? '_blank' : undefined}
            rel={openInNewTab ? 'noopener noreferrer' : rel}
            className="hover:text-emerald-500 transition-colors underline"
          >
            {children}
          </a>
        ),
      }}
    />
  )
}