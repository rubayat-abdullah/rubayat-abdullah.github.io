import rb1_src from "../../public/rb1.png";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Header() {
    return (
        <header>
            <img src={rb1_src} alt="rb1" className="header-avatar" />
            <div>
                <p>Rubayat Abdullah</p>
                <a href="mailto:rubayatalabdullah@gmail.com" className="contact-item contact-link">
                    <MdEmail /> rubayatalabdullah@gmail.com
                </a>
                <div className="contact-item">
                    <MdLocationOn /> Dhaka, Bangladesh
                </div>
            </div>
        </header>
    )
}