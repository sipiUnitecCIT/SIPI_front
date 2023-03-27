import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

const RenderMarkdown = ({ content }) => {
  return (
    <div className="post">
      <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default RenderMarkdown