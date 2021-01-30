
export default function DetailSheet() {
    return (
        <div className="login" >
            {/* <h2 className="title">Login</h2> */}
            <form action="#" className="text-center" method="POST">
                <img src="assets/images/logoicon1.png"
                    width="180"
                    className="mb-4"
                    alt="Avatar" style={{ objectFit: 'cover', filter: 'drop-shadow(0px 10px 30px #ffa400)' }} />
                <div className="form-group">
                    <label for="login-input-email" className="pr-2">Username : </label>
                    <input type="email" className="input-field" id="login-input-email" placeholder="Enter your Email" />
                </div>
                <div className="form-group">
                    <label for="login-input-password" className="pr-2">Password : </label>
                    <input type="password" className="input-field" id="login-input-password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <span className="pr-2">
                        <input type="checkbox" className="check-box-field" id="input-save-password" checked={false} />
                    </span>
                    <span className="pr-2">
                        <label for="input-save-password">Remember Password</label>
                    </span>
                    <span className="pr-2">
                        <a href="#">
                            Forgot Password?
                        </a>
                    </span>
                </div>
                <div className="form-group">
                    <button type="submit" className="mybtn1">Log In</button>
                </div>
                <div className="form-group">
                    <span className="pr-2">
                        <a href="/register">
                            สมัครออโต้
                        </a>
                    </span>
                    <span className="pr-2">
                        <a href="https://lin.ee/SGc236G">
                            สมัครผ่านไลน์
                        </a>
                    </span>
                </div>
            </form>
        </div>
    );
}
