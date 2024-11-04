type IconProps = {
  icon:string
}
export const CMSIcon = ({ icon }:IconProps) => {
  return <span dangerouslySetInnerHTML={{__html:icon}} />
}