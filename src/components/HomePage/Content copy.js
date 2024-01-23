import Button from "../UI/Button";
import Profile from "../../assets/profile.jpg";

const Content = (props) => {
    return(
        <div className="grid grid-cols-2 mt-20 mx-auto">
            <div className="flex justify-center">
            <div className="flex flex-col justify-center items-start w-[400px] h-[400px] text-lg">
                <div className="font-bold">Hi there! <span className="text-orange-600">Minglabar </span></div>
                <div className="font-bold">I'm <span className="text-orange-600">Mar Mar Soe</span>, Software Engineer with over 5 years expirence.</div>

                <div className="mt-10">Passionate to create beafuiful and enjoyable web apps.I'm currently working in Tokyo, Japan.</div>
                <div className="flex justify-center gap-x-2 mt-10">
                    <Button>Resume</Button>
                    <Button>About</Button>
                </div>
            </div>
            </div>
          
            <div className="flex justify-center items-center p-10">
                <img src={Profile} alt="my-profile" className="w-[400px] h-[400px] "/>
            </div>
        </div>
    )
}

export default Content;