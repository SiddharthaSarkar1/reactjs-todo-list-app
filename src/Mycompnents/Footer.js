import React from 'react'

const Footer = () => {

    let footerStyle = {
        position : "relative",
        width : "100%",
        top : "60vh",
        borderTop : "2px solid brown"
    }

    return (
        <>
            <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">Copyright &copy; SiddharthaSarkar</p>
            </footer>
        </>
    )
}

export default Footer; 