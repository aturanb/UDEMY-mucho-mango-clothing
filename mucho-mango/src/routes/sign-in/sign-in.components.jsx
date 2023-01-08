import { signInWithGooglePopup,  createUserDocumentFromAuth} from "../../components/utils/firebase/firebase.utils"; 

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h2>Sign In</h2>
            <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE POP UP</button>
        </div>
    )
}
export default SignIn;