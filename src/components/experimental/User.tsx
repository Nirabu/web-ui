import React, {useState, useEffect} from "react";

interface UserProps {
    id: any;
}

// @ts-ignore
const User: React.FC<UserProps> = (props) => {
    const [user, setUser] = useState(null);

    async function fetUserData(id: number) {
        const response = await fetch("/" + id);
        setUser(await response.json());
    }

    useEffect(() => {
        fetUserData(props.id);
    }, [props.id]);

    if (!user) {
        return "loading...";
    }

    return (
        <details>
            // @ts-ignore
            <summary>{user.name}</summary>
            // @ts-ignore
            <strong>{user.age}</strong> year old
            <br />
            // @ts-ignore
            lives in {user.adress}
        </details>
    )
};


export default User;
