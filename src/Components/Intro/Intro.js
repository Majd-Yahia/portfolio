import invent from '../../Assets/invent.png'
import './Intro.css';

function Intro() {
    return (
        <div className="Intro">
            <img src={invent} alt="quote" />
            <p>Hello, my name is Majd Yahia. I'm a Web Designer, UI Developer and Game Developer based in Jordan,
            Amman. I also actively takes courses on Udemy . If you have a project need that I can help with, <a href="#contact">please get in touch</a>.</p>
        </div>
    )
}

export default Intro;