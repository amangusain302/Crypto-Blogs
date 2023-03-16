import React from 'react'
import PostCard from './PostCard'
import { blogData } from '../../data/blogData'

export default function () {
  return (
    <>
    <div className='recent-post-container'>
    <h2><b>Recent Posts</b></h2>
    <div className='post-cards'> 
    {
      blogData.map(post => {
        return <PostCard post={post}/>
      })
    }
    </div>
    <div className='read-more-button'>Read more...</div>
    </div>
    </>
  )
}
