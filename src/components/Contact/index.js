import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    // const refForm = useRef

    useEffect(() => {
        setTimeout(() => {
           setLetterClass('text-animate-hover') // 4秒後にクラス変更
        }, 3000);
    }, [])



    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={Array.from('Contact me')} idx = {15} />
                    </h1>
                    <p>
                        I am interested in freelance opportunities – especially
                        ambitious or large projects. However, if you have other request or
                        question, don’t hesitate to contact me using below form
                        either.
                    </p>
                    <div className='contact-form'>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li className='half'>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )

}

export default Contact