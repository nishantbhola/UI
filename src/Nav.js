

function Nav(){
    
    return (
            <>
            <header>
                <nav className="w-full h-[65px] shadow-md flex justify-around items-center px-3">
                    <div>
                        <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="" className="w-[80px] rounded-[5px] "/></a>
                    </div>
                    <div className="flex gap-5">
                        <a href="/" className="text-xl font-bold">Home</a>
                        <a href="/" className="text-xl font-bold">About</a>
                        <a href="/" className="text-xl font-bold">Contact</a>
                        <a href="/" className="text-xl font-bold">Login</a>
                    </div>

                </nav>
            </header>
            </>
    )
};

export default Nav;