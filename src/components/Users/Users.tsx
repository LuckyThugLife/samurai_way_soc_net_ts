import React from "react";
import styles from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import {UsersType} from "../../redux/users_reducer";

type PropsType = UsersPropsType

const Users = (props: PropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://img.freepik.com/premium-vector/portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration_266660-423.jpg",
                    followed: false,
                    fullName: "Rustam",
                    status: "I am a boss",
                    location: {city: "Dushanbe", country: "Tajikistan"}
                },
                {
                    id: 2,
                    photoUrl: "https://img.freepik.com/premium-vector/portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration_266660-423.jpg",
                    followed: true,
                    fullName: "Fira",
                    status: "I am a boss",
                    location: {city: "Dushanbe", country: "Tajikistan"}
                },
                {
                    id: 3,
                    photoUrl: "https://img.freepik.com/premium-vector/portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration_266660-423.jpg",
                    followed: false,
                    fullName: "Adam",
                    status: "I am a boss",
                    location: {city: "Dushanbe", country: "Tajikistan"}
                },
                {
                    id: 4,
                    photoUrl: "https://img.freepik.com/premium-vector/portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration_266660-423.jpg",
                    followed: true,
                    fullName: "Aya",
                    status: "I am a boss",
                    location: {city: "Dushanbe", country: "Tajikistan"}
                },

            ]as Array<UsersType>
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
              <div>
                <img src={u.photoUrl} className={styles.userPhoto} alt={"avatar"}/>
              </div>
              <div>
              {u.followed
                  ? <button onClick={() => {
                      props.unFollow(u.id)
                  }}>UnFollow</button>
                  : <button onClick={() => {
                      props.follow(u.id)
                  }}>Follow</button>}
              </div>
            </span>
                <span>
              <div>{u.fullName}</div><div>{u.status}</div>
            </span>
                <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
                <span>
              <div>

              </div>
            </span>
            </div>)
        }
    </div>
}

export default Users