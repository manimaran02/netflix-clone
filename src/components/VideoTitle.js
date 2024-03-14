

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[16%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-semibold  ">{title}</h1>
      <h2 className="hidden md:inline-block text-md w-1/4 py-6 ">{overview}</h2>
      <div>
        
        <button className="text-black bg-white mt-1 md:mt-0 md:px-10 px-2 md:py-4 py-1 md:text-xl text-md font-semibold rounded-md hover:bg-opacity-80">▷ Play</button>
        <button className="text-white bg-gray-500 hidden md:inline-block px-10 py-4 text-xl font-semibold rounded-md mx-2 bg-opacity-50 hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle