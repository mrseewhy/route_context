import Button from './Button'

const Hero = () => {
    return (
        <div className='w-full h-[60vh] bg-yellow-50 grid place-items-center'>
            <div className='flex flex-col items-center w-[60%] gap-4'>
                <h1 className='text-gray-900 font-bold text-4xl'>This is the headline</h1>
                <p className='text-lg font-gray-500 text-center'> This is all you need to know about this website, it is the best from every perspective and i know that you know that. </p>
                <div>
                    <Button name={"About Us"} color={'yellow'} url='/about' />
                </div>
            </div>

        </div>
    )
}

export default Hero