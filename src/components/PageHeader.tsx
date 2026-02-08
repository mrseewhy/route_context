
const PageHeader = ({ heading }: { heading: string }) => {
    return (
        <div className='h-24 bg-yellow-50 dark:bg-yellow-950 flex w-full items-center justify-center'>
            <p className='font-bold text-2xl text-black dark:text-white'>{heading}</p>
        </div>
    )
}

export default PageHeader