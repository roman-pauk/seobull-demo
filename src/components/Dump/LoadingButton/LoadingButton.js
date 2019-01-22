import React from 'react'

function LoadingButton({ loading, className, disabled, type, children, onClick }) {
    return (
        <button
            className={loading ? className + ' loading' : className}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {loading 
                ? <div className="spinner"></div>
                : children
            }
        </button>
    )
}

export default LoadingButton
