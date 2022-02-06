import React, { PureComponent } from "react";
import txt from "./demo.md";
import ReactMarkdown from "react-markdown";
import remarkToc from "remark-toc";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from 'remark-gfm'

export default class index extends PureComponent {
  render() {
    return (
      <div className="markdown-body center">
        <ReactMarkdown
          remarkPlugins={[remarkToc,remarkGfm]}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              console.log(match)
              if ( !inline && match ) {
                return  <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              ></SyntaxHighlighter>
              }
              return(
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {txt}
        </ReactMarkdown>
      </div>
    );
  }
}
