import { TypeAnimation } from 'react-type-animation';

const thingsIdo = [
    "You can find me watching F1 🏎",
    1000,
    "You can find me listening to drum 🥁 and bass 🗣🎧",
    1000,
    "You can find me maybe attending a quiz 📲",
    1000,
    "You can find me watching Soodhu Kavvum for the 27th time 🫣 🎬",
    1000,
    "You can find me larping on r/ncd 🫡",
    1000,
    "You can find me COOKING SAMBHAR 🗣🗣🗣🍲",
]

const AnimatedIntro = () => {
    return (
        <TypeAnimation
            sequence={thingsIdo}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            deletionSpeed={50}            
            style={{ fontSize: '1em', display: 'inline-block' }}
        />
    );
};

export default AnimatedIntro;