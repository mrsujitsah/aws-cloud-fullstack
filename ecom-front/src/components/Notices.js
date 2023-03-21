import React, { useEffect, useState } from "react";

function Notices(){
    const [notices, setNotices] = useState('');

    useEffect(()=>{
        fetch("http://localhost:8080/notices")
            .then(resp => resp.text())
            .then(data => setNotices(data))
    },[])

    return(
        <div>Notice Board<br />
            {notices}
        </div>
        
    )
}

export default Notices;