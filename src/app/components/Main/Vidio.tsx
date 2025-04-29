const MainVidio = () => {
  return (
    <div className="flex justify-center px-4">
      <figure className="w-full max-w-4xl">
        <div className="w-full">
          <iframe
            title="Casa Damião"
            height="385"
            width="685"
            src="https://www.youtube.com/embed/s_fAlMWIX0c?feature=oembed"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </figure>
    </div>
  );
};

export default MainVidio;
