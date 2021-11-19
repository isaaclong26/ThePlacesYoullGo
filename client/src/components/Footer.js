import React from 'react';

const styles ={
    footerCont: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center"
    }
}

function Footer() {
    return (
        <div style={styles.footerCont}>
            <p>&copy; By Kiyona Bentley, Isaac Long, Savion Elsey-Williams and Molly Singmaster</p>
        </div>
    );
}

export default Footer;