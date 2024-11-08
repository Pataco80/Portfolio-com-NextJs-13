// Types Props
type IconProps = {
  icon:string
}

// Component
export const CMSIcon = ({ icon }: IconProps) => {
  
	// JSX Component
  return <span dangerouslySetInnerHTML={{__html:icon}} />
}