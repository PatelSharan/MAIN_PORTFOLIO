import React from 'react'

const DownloadResume = () => {
    return (
        <a
            href="/assets/resume/SharanPatel_Resume.pdf"
            download="Sharan_Patel_Resume.pdf"
        >
            <button className='btn-1 text-xs'>
                Download Resume
            </button>
        </a>
    )
}

export default DownloadResume