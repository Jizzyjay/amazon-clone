import Link from "next/link";

const Customer = () => {

  return (
    <div id='contact' className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl uppercase">
          Customer Care
        </p>
        <h2 className="py-4"> 
            Reach out with your complaints and suggestions and we will get back to you as soon as possible.
        </h2>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-100 rounded-xl lg:p-4">
            <div className="p-4">
                <form>
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                            <label className="uppercase text-sm py-2">Name</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label className="uppercase text-sm py-2">Phone Number</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                        </div>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea className='border-2 rounded-lg p-3 border-gray-300' 
                            placeholder="Type your message here..."
                        />
                    </div>
                    <Link href='mailto:ekunolajohn@gmail.com'>
            <button className="w-full p-4 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow
             hover:text-black duration-300 mt-2 cursor-pointer">
                Send Message
            </button>
                    </Link>         
                    </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Customer;
