function Header(){

    return (
        <div>
            <header className = "h-[4.5vw] flex justify-center">
                <div className="sub border w-[70%] flex justify-between items-center h-[100%]">
                    <div className="logo w-[10%]">
                        <img src="https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp" alt="" />
                    </div>
                    <div className="button">
                        <select name="" id="" className="ms-[-2vw]">
                            <option value="">Courses</option>
                            <option value="">Software Development</option>
                            <option value="">FrontEnd Development</option>
                        </select>
                    </div>
                    <nav className="w-[50%] ms-[6vw] h-[100%] flex items-center justify-between">
                        <ul className="flex w-[100%] justify-between">
                            <li><p className="textnav text-[1vw] font-[600] cursor-pointer">Success Stories</p></li>
                            <li><p className="textnav text-[1vw] font-[600] cursor-pointer">Events</p></li>
                            <li><p className="textnav text-[1vw] font-[600] cursor-pointer">Hire From Us</p></li>
                            <li><p className="textnav text-[1vw] font-[600] cursor-pointer">Fees</p></li>
                            <li><p className="textnav text-[1vw] font-[600] cursor-pointer">Scholarship</p></li>
                        </ul>
                    </nav>
                    <div className="buttonTwo">
                        <button className="bg-[red] text-[white] h-[45px] w-[100px] rounded-[0.5vw]">Register</button>
                    </div>
                </div>
            </header>

            {/* Section 1 */}

            <div className="a mt-[6vw] w-[100%] flex justify-center">
                <div className="a1 w-[70%] text-center">
                    <h1 className="text-[2.4vw] font-[700] ">The Masai Team</h1>
                    <p className="text-[1.4vw] mt-2">Behind every successful start-up, there is a seasoned and an experienced team. Unified by a mission to make Masai India’s biggest career focussed higher education institute, the Masai family currently has over 200+ members, with the team getting bigger every week.</p>
                </div>
            </div>

            {/* Section 2 */}

            <div className="a mt-[6vw] w-[100%] flex justify-center">
                <div className="a1 w-[70%] text-center">
                    <h1 className="text-[1.6vw] font-[700] ">Leadership Team</h1>
                    <p className="text-[1vw] mt-2">With more than 70 years of combined experience in technology, engineering and design our Executive Team has one common goal - “Unlock the human potential of India by transforming the education system”</p>
                </div>
            </div>

             {/* Section 3 */}

             <div className="a mt-[6vw] w-[100%] flex justify-center">
                <div className="a1 w-[70%] grid grid-cols-4 gap-8 text-center">
                  <div className="aa border">
                    <p className="mt-[12vw] text-[white] text-[25px]" >Prateek Shukla</p>
                    <p className="text-[white] text-[16px] mt-1" >Founder & CEO</p>
                    <img src="https://www.masaischool.com/images/linkedin.svg" id="imgg" alt="" />
                  </div>
                  <div className="aa2 border">
                  <p className="mt-[12vw] text-[white] text-[25px]" >Prateek Shukla</p>
                    <p className="text-[white] text-[16px] mt-1" >Founder & CEO</p>
                    <img src="https://www.masaischool.com/images/linkedin.svg" id="imgg" alt="" />
                  </div>
                  <div className="aa3 border">
                     <p className="mt-[12vw] text-[white] text-[25px]" >Prateek Shukla</p>
                    <p className="text-[white] text-[16px] mt-1" >Founder & CEO</p>
                    <img src="https://www.masaischool.com/images/linkedin.svg" id="imgg" alt="" />
                  </div>
                  <div className="aa4 border">
                     <p className="mt-[12vw] text-[white] text-[25px]" >Prateek Shukla</p>
                    <p className="text-[white] text-[16px] mt-1" >Founder & CEO</p>
                    <img src="https://www.masaischool.com/images/linkedin.svg" id="imgg" alt="" />
                  </div>

                  <div className="aa5 border">
                     <p className="mt-[12vw] text-[white] text-[25px]" >Prateek Shukla</p>
                    <p className="text-[white] text-[16px] mt-1" >Founder & CEO</p>
                    <img src="https://www.masaischool.com/images/linkedin.svg" id="imgg" alt="" />
                  </div>
                  <div className="aa6 border">
                     <p className="mt-[12vw] text-[white] text-[25px]" >Prateek Shukla</p>
                    <p className="text-[white] text-[16px] mt-1" >Founder & CEO</p>
                    <img src="https://www.masaischool.com/images/linkedin.svg" id="imgg" alt="" />
                  </div>
                  <div className="aa7 border">
                     <p className="mt-[12vw] text-[white] text-[25px]" >Prateek Shukla</p>
                    <p className="text-[white] text-[16px] mt-1" >Founder & CEO</p>
                    <img src="https://www.masaischool.com/images/linkedin.svg" id="imgg" alt="" />
                  </div>
                  <div className="aa8 border">
                     <p className="mt-[12vw] text-[white] text-[25px]" >Prateek Shukla</p>
                    <p className="text-[white] text-[16px] mt-1" >Founder & CEO</p>
                    <img src="https://www.masaischool.com/images/linkedin.svg" id="imgg" alt="" />
                  </div>
                </div>
            </div>
        </div>
    )


}

export default Header;