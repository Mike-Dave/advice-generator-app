export default function MainContent({ quote, quoteID }) {
    return (
        <>
            <h1 className=" p-4  text-sm  font-extrabold tracking-[3px] text-neonGreen">
                ADVICE #{quoteID}
            </h1>
            <p className="pb-6 font-manrope text-2xl font-bold text-lightCyan md:px-8">
                {quote}
            </p>
        </>
    )
}
