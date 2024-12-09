import { useAuth0 } from "@auth0/auth0-react";

export default function SignUpButton() {
    const { loginWithRedirect } = useAuth0();

    // return <button onClick={() => loginWithRedirect({ screen_hint: 'signup'})}>Sign Up</button>;
    return <button onClick={() => loginWithRedirect({ 
        authorizationParams: {
            screen_hint: 'signup'
        }
    })}>Sign Up</button>;

}