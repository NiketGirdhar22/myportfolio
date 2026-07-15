import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import RedirectButton from '@/components/RedirectButton'
import '@/app/globals.css';

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function Table(props: JSX.IntrinsicElements['table']) {
  return (
    <div className='my-8 overflow-x-auto rounded-sm border border-border bg-card'>
      <table {...props} />
    </div>
  )
}

const components = {
  code: Code,
  RedirectButton,
  table: Table,
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      options={{
        ...props.options,
        mdxOptions: {
          ...props.options?.mdxOptions,
          remarkPlugins: [
            ...(props.options?.mdxOptions?.remarkPlugins || []),
            remarkGfm
          ]
        }
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
