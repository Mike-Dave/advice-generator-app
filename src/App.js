import { useEffect, useState } from 'react'
import MainContent from './MainContent'

export default function App() {
    const [quote, setQuote] = useState(
        "''It is easy to sit up and take notice, what's difficult is getting up and taking action.''"
    )
    const [quoteID, setQuoteID] = useState('')
    async function clickToGetAdvice() {
        try {
            const res = await fetch('https://api.adviceslip.com/advice')
            if (!res.ok) throw new Error('Problem getting advice data')
            const data = await res.json()

            setQuote(data.slip.advice)
            setQuoteID(data.slip.id)
        } catch (err) {
            setQuote(`${err.message}, please try again!`)
        }
    }
    useEffect(function () {
        clickToGetAdvice()
    }, [])
    return (
        <main className=" flex min-h-screen items-center justify-center bg-darkGrayishBlue">
            <section className=" container relative mx-auto w-11/12 rounded-lg bg-grayishBlue  p-5 pb-10 text-center md:max-w-md">
                <MainContent quote={quote} quoteID={quoteID} />
                <div className="px-2 pb-7">
                    <img
                        className="pattern-divider md:hidden"
                        src="../images/pattern-divider-mobile.svg"
                        alt="two white lines"
                    />
                    <img
                        className="pattern-divider hidden md:block"
                        src="../images/pattern-divider-desktop.svg"
                        alt="two white lines"
                    />
                </div>
                <div
                    className=" absolute -bottom-8  left-[40%] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-neonGreen hover:shadow-[2px_2px_30px_2px_#1DEB8B] md:left-[43%]"
                    onClick={clickToGetAdvice}
                >
                    <img
                        className="h-[24px] w-[50%]"
                        src="../images/icon-dice.svg"
                        alt="dice of number 5"
                    />
                </div>
            </section>
        </main>
    )
}