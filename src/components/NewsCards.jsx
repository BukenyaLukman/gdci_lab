import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const NewsCards = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    
    async function fetchData() {
      let url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-12-10&sortBy=publishedAt&apiKey=d65e19fdc1c74c8cbda9c2c5d52b4a30'

      const response = await fetch(url)
      const data = await response.json()
      // data is an object with a key called articles
      // articles is an array
      setArticles(data.articles)
    }
    
    fetchData()
    
    
  }, [])

  console.log(articles)

  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <h1 className='text-2xl font-bold text-center mb-8'>News</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {articles?.map((article, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg p-0 lg:p-8'>
            <img src={article.urlToImage} alt={article.title} className='rounded-t-lg h-48 w-full object-cover'/>
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-4'>{article.title}</h2>
              <p className='text-gray-700 mb-4'>{article.description}</p>
              <Link to={article.url} target='_blank' className='text-blue-500 font-bold hover:underline'>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsCards