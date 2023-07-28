import React, { useContext } from "react";
import ImageContext from "../context/ImageContext";
import ImageCard from "./ImageCard";
import { CircleFadeLoader } from "react-loaders-kit";

const ImageContainer = () => {
  const { response, isLoading, error, queryEntry } = useContext(ImageContext);
  const loaderProps = {
    loading: isLoading,
    size: 35,
    duration: 1,
    colors: ["#5e22f0", "#f6b93b"],
  };

  return (
    <section>
      {queryEntry && (
        <h2 className="text-center mt-6 underline text-2xl">
          Results for {queryEntry}
        </h2>
      )}

      {isLoading && !error ? (
        <div className="grid place-items-center my-10">
          <CircleFadeLoader {...loaderProps} />
        </div>
      ) : (
        <div className="md:max-w-7xl md:mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
          {response.map((image) => {
            return (
              <ImageCard
                key={image.id}
                image={image}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ImageContainer;
