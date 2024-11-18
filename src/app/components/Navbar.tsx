import Image from "next/image";
import logo from "@/app/Images/Logo.png";


const Navbar = () => {
    return (
        <div>
            <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">

                <div className="w-[191px] h-[34px]">
                    <Image src={logo} alt="Logo" />
                </div>

                <div className="w-[737.5px] h-[60px] flex justify-between items-center">

                    <div className="w-[549px] h-[23px]">

                        <ul className="flex flex-row justify-between text-white">
                            <li className="font-dm hover:text-[#2e89af] hover:cursor-pointer">Products</li>
                            <li className="font-dm hover:text-[#2e89af] hover:cursor-pointer">Solutions</li>
                            <li className="font-dm hover:text-[#2e89af] hover:cursor-pointer">resources</li>
                            <li className="font-dm hover:text-[#2e89af] hover:cursor-pointer">Pricing</li>
                        </ul>

                    </div>

                    <div className="w-[126px] h-[60px]">
                        <button className="px-10 py-4 rounded-lg font-inter bg-[#FFE492] hover:bg-[#2e89af]" >
                            Login
                        </button>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default Navbar;