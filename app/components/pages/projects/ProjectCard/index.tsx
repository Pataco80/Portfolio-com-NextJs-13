// Imports Next plugins
import Image from 'next/image'
import Link from 'next/link'

// Types Props
type ProjectCardProps = {
  name: string,
  url: string,
  image: string,
  altImage: string,
  description: string,
  techs:string[],
  githubUrl?: string,
  liveUrl?:string
}

// Component
export const ProjectCard = ({ name, url, image, altImage, description, techs }: ProjectCardProps) => {

	// JSX Component
  return (
    <Link href={url}>
      <article className='group h-[450px] flex flex-col bg-pale-sky-800 border-2 border-pale-sky-800 transition-all hover:border-blue-ribbon opacity-70 hover:opacity-100 rounded-lg overflow-hidden'>
      <div className='w-full h-48 overflow-hidden'>
        <Image className='w-full h-full object-cover group-hover:scale-110 duration-500 transition-all' src={`/images/projects/${image}`} alt={altImage} width={380} height={200} />
      </div>
      <div className='flex-1 flex flex-col p-8'>
        <strong className='font-medium text-pale-sky-50/90 group-hover:text-blue-ribbon transition-all'>{name}</strong>
        <p className='my-2 text-pale-sky-400 line-clamp-4'>{description}</p>
        <p className='text-pale-sky-300 text-sm block truncate'>{techs.join(", ")}</p>
      </div>
      </article>
    </Link>
  )
}
