import React from 'react'
import { Button } from '../components/ui/button'

const Fab = () => {
    return (
        <div className='fixed bottom-5 right-5'>
            <Button className='rounded-2xl w-16 h-16'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </Button>
        </div>
    )
}

export default Fab