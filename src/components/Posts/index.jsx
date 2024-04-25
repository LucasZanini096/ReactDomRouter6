import React from 'react'
import './style.css'
import { useParams, useSearchParams } from 'react-router-dom'

export const Posts = () => {
  const params = useParams();
  const {id} = params;
  const [qs] = useSearchParams();

  return(
    <div>
      <h1>
        Post {`Para: ${id}`} {`QS: ${qs.get('page')}`}
      </h1>
    </div>
  )
}