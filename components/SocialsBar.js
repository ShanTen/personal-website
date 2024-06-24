import { SocialIcon } from 'react-social-icons'

const urls = [
    "https://www.x.com/shantanu4twt",
    "https://www.github.com/shanTen",
    "https://www.linkedin.com/in/shantanu-ramanujapuram/",
    "https://open.spotify.com/user/kh9mh4amwrcm5lwyd8ama8tpb?si=fYGRBOWaQIKB15A-kbbJQA",
    "https://monkeytype.com/profile/acremote"
]

const SocialsBar = () => {
    return (
        <div className="socials-bar">
            <style jsx>{`
                .socials-bar {
                    display: flex;
                    justify-content: center;
                    margin-top: 2rem;
                }
            `}</style>
            {urls.map((url, index) => (
                <SocialIcon
                    bgColor="#000000"
                    fgColor="#ffffff"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    url={url}
                    style={{ height: 50, width: 50, margin: '0 1rem' }}
                />
            ))}
        </div>
    );
}

export default SocialsBar;

