import Image from "next/image";

/* read all files from /images/eventPics and display them*/

const eventPics = require.context("../public/images/eventPics", false, /\.(png|jpe?g|svg)$/);
const eventPicsList = eventPics.keys().map((pic) => pic.slice(2));

export default function PhotosDisplay() {
  return (
    <div className="pictures-grid-showcase">
      {eventPicsList.map((pic, index) => (
        <Image
          key={index}
          src={`/images/eventPics/${pic}`}
          alt="Photo"
          width={1125}
          height={750}
          priority
          className="next-image"
          onClick={() => window.open(`/images/eventPics/${pic}`, "_blank")}
          onContextMenu={(e) => e.preventDefault()}
        />
      ))}
    </div>
  );
}
