import React from "react";

const ImageCard = ({ image }) => {
  const { urls, alt_description, width, height } = image;
  return (
    <figure className="mb-4 h-96">
      <a
        href={urls.regular}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={urls.full}
          alt={alt_description}
          width={width}
          height={height}
          className="h-80 object-cover bg-gray-100"
        />
      </a>
      <figcaption
        className="
              font-bold md:text-lg  p-2 "
      >
        {alt_description.charAt(0).toUpperCase() + alt_description.slice(1)}
      </figcaption>
    </figure>
  );
};

export default ImageCard;
