const MainVidio = () => {
  return (
    <div className="w-full aspect-video">
      <figure className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          title="Casa Damião"
          src="https://www.youtube.com/embed/s_fAlMWIX0c?feature=oembed"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </figure>
    </div>
  );
};

export default MainVidio;
