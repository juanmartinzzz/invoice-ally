const LoadingIndicator = ({size = 8}) => {
  return (
    <div className={`w-${size} h-${size} border-4 border-primary border-b-transparent rounded-full animate-spin`} />
  )
}

export default LoadingIndicator;