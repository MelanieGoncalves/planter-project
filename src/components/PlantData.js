import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function PlantData() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      Axios.get('/api/v1/distributions/9/plants?token=' + process.env.REACT_APP_API_KEY)
        .then(response => {
          console.log(response.data.data)
          setPosts(response.data.data)
        }).catch(err => {
          console.log(err)
        });


    };
    fetchData();
  }, [])

  return (
    <div>

      <ul>
        {
          posts.map(post => <li key={post.id}>{post.common_name}</li>)
        }
      </ul>

    </div>
  )
}

export default PlantData
