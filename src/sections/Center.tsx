import Profile from "../components/Profile"
import Shenanigans from "../components/Shenanigans"

const Upper = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
        <Profile />
        <Shenanigans />
      </div>
    </div>
  )
}

export default Upper
