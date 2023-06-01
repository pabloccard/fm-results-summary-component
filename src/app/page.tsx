import { Brain } from '../icons/brain'
import { ChatRemove } from '../icons/chat-remove'
import { Eye } from '../icons/eye'
import { Flash } from '../icons/flash'
import './page.css'

export default function Home() {
  return (
    <main className='cards'>
      <div className='results'>
        <h2 className='results__title'>Your Result</h2>

        <div className='results__score-container'>
          <span className='results__score'>76</span>
          <span className='results__max-score'>of 100</span>
        </div>

        <div className='results__result-container'>
          <h3 className='results__result-title'>Great</h3>
          <p className='results__result-message'>Your performance exceed 65% of the people conducting the test here!</p>
        </div>
      </div>
      

      <div className='summary'>
        <h2 className='summary__title'>Summary</h2>

        <ul className='summary__items'>
          <li className='summary__item summary__item--red'>
            <span className='summary__item-title'>
              <Flash />
              Reaction
            </span>

            <div>
              <span className='summary__score'>80 </span>
              <span className='summary__score summary__score--low-opacity'>/ 100</span>
            </div>
          </li>

          <li className='summary__item summary__item--yellow'>
            <span className='summary__item-title'>
             <Brain />
              Memory
            </span>

            <div>
              <span className='summary__score '>80 </span>
              <span className='summary__score summary__score--low-opacity'>/ 100</span>
            </div>
          </li>

          <li className='summary__item summary__item--green'>
            <span className='summary__item-title'>
              <ChatRemove />
              Verbal
            </span>

            <div>
              <span className='summary__score'>80 </span>
              <span className='summary__score summary__score--low-opacity'>/ 100</span>
            </div>
          </li>

          <li className='summary__item summary__item--blue'>
            <span className='summary__item-title'>
              <Eye />
              Visual
            </span>

            <div>
              <span className='summary__score'>80 </span>
              <span className='summary__score summary__score--low-opacity'>/ 100</span>
            </div>
          </li>
        </ul>
        
        <button className='summary__btn'>
          Continue
        </button>
      </div>
    </main>
  )
}
