import { useEffect } from "react";
import { useAccount } from "./AccountProvider";

const SignedInAs = () => {
    console.log('running useAccount');
    console.log(useAccount());
    const { user } = useAccount();
    console.log(user.name);



    useEffect(() => {
        console.log('use effect in signed in as');

    });

    return (
        <>
            {/* {( user && <p>signed in as {user.name}</p> )} */}
        </>
    );
};

export default SignedInAs;