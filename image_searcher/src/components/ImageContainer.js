import React, { useContext } from "react";
import ImageContext from "../context/ImageContext";
import ImageCard from "./ImageCard";
import EmtpyCard from "./EmtpyCard";

const ImageContainer = () => {
  const { response, isLoading, error, queryEntry } = useContext(ImageContext);

  return (
    <section>
      {queryEntry && (
        <h2 className="text-center mt-6 underline text-2xl">
          Results for {queryEntry}
        </h2>
      )}

      <div className="md:max-w-7xl md:mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
        {response.map((image) =>
          !isLoading && !error ? (
            <ImageCard
              key={image.id}
              image={image}
            />
          ) : (
            <EmtpyCard key={image.id} />
          )
        )}
      </div>
    </section>
  );
};

export default ImageContainer;
