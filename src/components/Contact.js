export const Contact = () =>{
    return(
        <div className="w-full flex flex-col items-center">
            <div className="w-[650px] mt-[14px] p-[50px] flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] ">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                </div>
                <div className="grid grid-cols-2 gap-[20px]">
                    <div className="flex flex-col rounded-[8px] p-[10px] gap-[10px] border-[1px] grow">
                        <h1>Address</h1>
                        <p className="wrap">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                    <div className="flex flex-col rounded-[8px] p-[10px] gap-[10px] border-[1px] grow">
                        <h1>Contact</h1>
                        <p>313-332-8662
                            info@email.com</p>
                    </div>
                </div>
                <form>
                    <div className="flex flex-col p-[40px] gap-[20px] bg-[#F6F6F7] rounded-[8px] ">
                        <h1>Leave a Message</h1>
                        <div className="flex gap-[20px]">
                        <input type="text" placeholder="Your Name" className="flex grow rounded-[4px]"></input>
                        <input type="text" placeholder="Your Email" className="flex grow rounded-[4px]"></input>
                        </div>
                        <input type="text" placeholder="Subject" className="w-[100%] rounded-[4px]"></input>
                        <textarea placeholder="Write a message" className="rounded-[4px] h-[134px]"></textarea>
                        <button type="submit" className="flex p-[8px] rounded-[8px] bg-[#4B6BFB] text-white w-[130px] text-xs justify-center">Send a message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}