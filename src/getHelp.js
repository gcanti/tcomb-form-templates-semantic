import React from 'react'

export default function getError({help, attrs}) {
  if (help) {
    return <span className="ui pointing label visible" id={`${attrs.id}-tip'`}>{help}</span>
  }
}
