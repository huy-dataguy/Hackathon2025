import React from 'react'
import ChoiceDiet from './Dish/ChoiceDiet'
import { useEffect, useState } from 'react'
const Assistant = () => {


  // test in frontend, before have backend api:
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    fetch("diet.json")
      .then(res => res.json())
      .then((data) => setDiets(data))
  }, [])

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center flex-col sm:flex-row gap-4">
        {
          diets.length > 0 && diets.map((diet, index) => (
            <ChoiceDiet key={index} diet={diet} />
          ))
        }

      </div>
    </div>
  )
}

export default Assistant
