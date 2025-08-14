export default function Register(){
    return (
        <>
            <form>
                <div>
                    <h1>Register</h1>
                    <hr />

                    <label htmlFor ="username" >Username </label>
                    <br />
                    <input type="text" placeholder="username" name="username" id="username"/>
                    <br />
                    <label htmlFor="password">Password </label>
                    <br />
                    <input type="password" placeholder='password' name="password" id="password"/>
                    <br />
                    <button type="submit" class="registerbtn">Button</button>
                </div>
            </form>
        </>
    )
}