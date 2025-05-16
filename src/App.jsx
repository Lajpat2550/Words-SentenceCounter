import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState({ paragraph: '', words: 0, sentences: 0 })
  useEffect(() => {
    setText({ ...text, words: text.paragraph.trim().split(/\s+/).length, sentences: text.paragraph.trim().split(/(?<=[a-zA-Z0-9])\.(?=\s|$)|(?<=[a-zA-Z0-9])[!?](?=\s|$)/g).length-1 });
  }, [text.paragraph])

  return (
    <>
      <div className="min-w-[300px] shadow-2xl md:w-[500px] lg:flex-row lg:w-[800px] h-[400px] flex flex-col justify-center items-center border-1 rounded-xl overflow-hidden">
        <div className='w-[100%] h-[70%] rounded-rt-3xl lg:h-[100%] lg:w-[50%] flex-col justify-center items-center flex'>
          <div className='w-[100%] font-bold border-b-1 h-[15%] bg-gray-200 lg:h-[20%] flex justify-center items-center'>Paragraph</div>
          <textarea value={text.paragraph}
            onChange={(e => setText({ ...text, paragraph: e.target.value }))}
            className=' bg-white p-2 lg:h-[80%] resize-none outline-none w-[100%] h-[85%]' placeholder='Write paragraph here...'>
          </textarea>
        </div>
        <div className='w-[100%] lg:border-l-1 h-[30%] lg:h-[100%] lg:w-[50%] justify-center flex-col items-center flex'>
          <div className='w-[100%] max-lg:border-y-1 font-bold lg:border-b-1 bg-gray-200 lg:h-[20%] h-[20%] flex justify-center items-center'>Result</div>
          <div className='w-[100%] h-[80%]  lg:h-[80%] flex justify-center items-center'>
            <div className='w-[50%] border-r-1 h-[100%] flex flex-col justify-center items-center'>
              <div className='w-[100%] border-b-1 h-[25%] lg:h-[10%] flex justify-center items-center'>Words</div>
              <div className='bg-white text-[32px] w-[100%] h-[90%] flex justify-center items-center'>{text.paragraph ==""? 0 : text.words}</div>
            </div>
            <div className='w-[50%] h-[100%] flex flex-col justify-center items-start'>
              <div className='w-[100%] border-b-1 h-[25%] lg:h-[10%] flex justify-center items-center'>Sentence</div>
              <div className='bg-white text-[32px] w-[100%] h-[90%] flex justify-center items-center'>{text.sentences}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
