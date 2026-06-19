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
          <b className="font-semibold text-pale-sky-50">{children}</b>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside pl-2 flex flex-col gap-1 -mt-3 marker:text-blue-ribbon-400">
            {children}
          </ul>
        ),
        a: ({ children, openInNewTab, href, rel, ...props }) => (
          <a
            {...props}
            href={href}
            target={openInNewTab ? '_blank' : undefined}
            rel={openInNewTab ? 'noopener noreferrer' : rel}
            className="text-blue-ribbon-300 hover:text-blue-ribbon-200 transition-colors underline underline-offset-2"
          >
            {children}
          </a>
        ),
      }}
    />
  )
}