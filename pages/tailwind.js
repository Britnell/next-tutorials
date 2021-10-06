import Page from "../lib/page"

export default function tailwind(){

    
    return (<Page>
        <div className="w-full flex flex-col justify-evenly h-1/2 " >

            <p className="text-lg font-bold" >LORem Ipsum dolor quantom domet donor kebab</p>

            <div className="w-full flex justify-center " >
                <div className="bg-gray-300 rounded px-6 py-4 " >flex centered</div>
            </div>

            <div>
                <div className="bg-green-500 rounded p-2 w-1/2 mx-auto text-center" >margin centered</div>
            </div>

            <div className="container flex items-center justify-evenly " >
                <label>Flex input row</label>
                <input type="text" placeholder="name" className="focus:ring border-2 text-gray-700 rounded-md " ></input>
                <button className="bg-green-300 border-green-800 border-b-2 border-r-1 rounded-md px-4 py-2 m-4 hover:shadow-md " >Go Green</button>
            </div>
            
            <div>

            </div>

        </div>

        {/* Form example > https://v1.tailwindcss.com/components/forms */}

        <div className=" container bg-blue-100 p-8 ">
            <form className="px-6 py-8 w-full max-w-xs bg-white shadow-md rounded m-auto">
                <div className="font-bold   "> SIGNUP NOW </div>
                
                <div className="mb-4 " >
                    <label className="block text-sm text-gray-700 font-bold mb-2 " >username</label>
                    <input className="appearance-none shadow border rounded w-full p-2 "  type="text" placeholder="username" ></input>
                </div>

                <div className="mb-4 " >
                    <label className="block text-sm text-gray-700 font-bold mb-2 " >Password</label>
                    <input className="appearance-none shadow border rounded w-full p-2 "  type="text" placeholder="password" ></input>
                </div>

                <div className="flex items-center justify-between " >
                    <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline " >Sign Up</button>
                    <a className="inline-block align-baseline font-bold text-sm  text-blue-400 hover:text-blue-600 " href="#" >reset password</a>
                </div>

            </form>
        </div>

    </Page>)
}