import PropTypes from "prop-types";

const Avatar = ({ name, number, image, link }) => {
  return (
    <>
      <a
        className="h-full flex items-center border-gray-200 border p-4 rounded-lg mx-6 mb-4"
        href={link}
        target="_blank"
      >
        <img
          alt="team"
          className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={image}
        />
        <div className="flex-grow">
          <h3 className="text-gray-900 title-font font-medium">{name}</h3>
          <p className="text-gray-500">{number}</p>
        </div>
      </a>
    </>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Avatar;
