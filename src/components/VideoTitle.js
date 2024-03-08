

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-semibold">{title}</h1>
      <h2 className="text-md w-1/4 py-6">{overview}</h2>
      <div>
        
        <button className="text-black bg-white px-9 py-3 text-xl font-semibold rounded-md hover:bg-opacity-80">▷ Play</button>
        <button className="text-white bg-gray-500 px-9 py-3 text-xl font-semibold rounded-md mx-2 bg-opacity-50 hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle