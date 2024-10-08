import Loading from "../assets/logo.png"
const Homeintro = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <figure>
        <img src={Loading} alt="" className="h-32 w-32"/>

      </figure>
      <br />
      <p className="font-medium text-lg">Loading...</p>
    </div>
  );
}

export default Homeintro