/* eslint-disable react/prop-types */

// circle image
//props format: size=32 as number value. Img={githubLogo} dynamically
const ImageCircle = ({ size = 32, Img }) => {
  return (
    <div
      style={{ height: `${size}px`, width: `${size}px`, borderRadius: "50%" }}
      className="image"
    >
      <img
        style={{ height: `${size}px`, width: `${size}px`, borderRadius: "50%" }}
        src={Img}
        alt=""
      />
    </div>
  );
};

export default ImageCircle;
