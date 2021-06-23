import React from 'react'
import './Comment.css'

function Comment ({comment, author, created_utc}) {

    const roundTime = t => {
        var unixTimestamp = t;
        var data = new Date(unixTimestamp * 1000);
        var hours = data.getHours();
        if (hours >= 24) {
            return data.getDay() + ' days';
        } else if (hours >= 1) {
            return hours + ' hours';
        } else {
            return data.getMinutes() + ' minutes';
        }
    }

    return (
                    <div className='comment-container'>
                        <p className='comment'>{comment}</p>
                        <p className='author'>{author} - {roundTime(created_utc)} ago</p>
                        <br></br>
                    </div>
                )
}

export default Comment