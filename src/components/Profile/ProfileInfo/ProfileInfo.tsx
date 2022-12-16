import React from 'react';
import c from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWfzqIDJarlhnyPIuTy4PGzRrJ9YoQDmUhzyxydK4bt9QPtpn2kLdTiZnuY0jo-4gN-J4&usqp=CAU"
                    alt="content"/>
            </div>
            <div className={c.descriptionBlock}>
                ava+description
            </div>
        </div>

    );
}

export default ProfileInfo;
