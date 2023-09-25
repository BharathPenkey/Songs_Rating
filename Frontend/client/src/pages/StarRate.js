import { useState } from "react"
import { FaStar } from "react-icons/fa"

function StarRate(){
    const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (<>
          {[...Array(5)].map((star, index) => {
            const currentRate = index + 1
            return (<>

              <label>
                <input type="radio" name="rating"
                  value={currentRate}
                  onClick={() => setRating(currentRate)}
            />
                <FaStar 
                 className="star" 
                size={15} 
                 color={currentRate <=(hover || rating) ? "yellow":"grey"} 
                 onMouseEnter={()=>setHover(currentRate)}
                 onMouseLeave={()=>setHover(null)}
                 
                 />
                          
            </label>

            </>


            )
          })}
  </>)



}

export default StarRate