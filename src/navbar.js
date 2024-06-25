

export default function Navbar(){
    function toggleHidden(){
        var hiddenElm = document.getElementById("navbar-solid-bg");
        hiddenElm.classList.toggle("hidden");
    }

    return(
        <nav className="absolute z-30 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 w-full" style={{background: "linear-gradient(180deg, #482C12 0%, #261709 0.01%, rgba(38, 23, 9, 0.68) 62.5%, rgba(38, 23, 9, 0.00) 100%)"}}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center whitespace-nowrap navbar-logo text-xs lg:text-xl">HJ. Muawanah</span>
                </div>
                <button onClick={toggleHidden} data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 dark:bg-opacity-10 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                        <a href=".#productSection" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-opacity-10 md:hover:bg-transparent md:border-0 md:hover:text-orange-300 dark:text-white md:dark:hover:text-orange-300 dark:hover:bg-gray-700 dark:hover:bg-opacity-30 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Product</a>
                        </li>
                        <li>
                        <a href=".#aboutSection" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-opacity-10 md:hover:bg-transparent md:border-0 md:hover:text-orange-300 dark:text-white md:dark:hover:text-orange-300 dark:hover:bg-gray-700 dark:hover:bg-opacity-30 dark:hover:text-white md:dark:hover:bg-transparent">About us</a>
                        </li>
                        <li>
                        <a href="https://wa.me/6281334236309" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-opacity-10 md:hover:bg-transparent md:border-0 md:hover:text-orange-300 dark:text-white md:dark:hover:text-orange-300 dark:hover:bg-gray-700 dark:hover:bg-opacity-30 dark:hover:text-white md:dark:hover:bg-transparent">Order</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}