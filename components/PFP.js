/*
    Circular image with a border and a shadow
    Custom badge on the bottom right to be rendered only on mobile 
*/

const CustomBadge = ({ emoji, children }) => {
    return (
        <div className="custom-badge-container">
            {children}
            <span className="custom-badge">{emoji}</span>
        </div>
    );
};

export default function PFP(props) {
    return (
        <CustomBadge emoji="🗣">
            <div className="pfp">
                <img src={props.src} alt="Profile Picture" />
                <style jsx>{`
            .pfp {
            position: relative;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            box-shadow: 0 0 0 5px #fff, 0 0 0 10px #000;
            overflow: hidden;
            margin: 0 auto 1rem auto;
            }
            img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transform: translateY(-25%);
            }
        `}</style>
            </div>
        </CustomBadge>
    );
}

