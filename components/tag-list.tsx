import { cn } from '@/lib/utils'

export default function TagList({
  items,
  className
}: {
  items?: string[]
  className?: string
}) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {items.map(item => (
        <span key={item} className='soft-tag'>
          {item}
        </span>
      ))}
    </div>
  )
}
