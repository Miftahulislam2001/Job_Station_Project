import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="my-container footer p-10 lg:pt-16 bg-[#2c2c2c] text-[#FFFFF4] rounded">
                <div>
                    <Link to='/'><img className='w-14 h-14 rounded-3xl border border-red-300' src="https://cdn5.vectorstock.com/i/1000x1000/44/04/looking-for-job-icon-vector-20994404.jpg" alt="" /></Link>
                    <p>JobStation Industries Ltd<br />All Time services This Company</p>
                    <label className="label">
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="Email" className="input input-bordered w-full pr-16" />
                        <button className="btn bg-[#FFB6C6] absolute top-0 right-0  rounded-l-none">Subscribe</button>
                    </div>
                </div>
                <div>
                    <span className="footer-title">About Us</span>
                    <a href="/" className="link link-hover">Home</a>
                    <a href="/apply" className="link link-hover">Applied Job</a>
                    <a href="/about" className="link link-hover">Statices</a>
                    <a href="/Blog" className="link link-hover">Blogs</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a href="/" className="link link-hover">Help Desk</a>
                    <a href="/" className="link link-hover">Become a Partner</a>
                    <a href="/" className="link link-hover">Developers</a>

                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a href="/" className="link link-hover">Awal Road, Dhaka</a>
                    <a href="/" className="link link-hover">+088 019547XX</a>
                    <a href="/" className="link link-hover">userinfo@gmail.com</a>

                </div>
            </footer>

            <footer className="my-container footer footer-center p-4 bg-[#1A1A1A] text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by JobStation Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;