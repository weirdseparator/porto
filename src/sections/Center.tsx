import Profile from "../components/Profile"
import Shenanigans from "../components/Shenanigans"

const Upper = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-start gap-10">
        <Profile />
        <Shenanigans />
      </div>
    </div>
  )
}

export default Upper
