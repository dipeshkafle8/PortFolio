import { useState, useEffect } from "react";
function Contact() {
  const [result, setResult] = useState({ status: "", msg: "" });
  async function handleOnSubmit(event) {
    event.preventDefault();
    setResult({
      status: "sending",
      msg: "Sending....",
    });
    const formData = new FormData(event.target);

    formData.append("access_key", "cc947b68-4f01-4fcc-9150-23d3613ee8c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult({
        status: "success",
        msg: "Form Submitted Successfully",
      });

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult({
        status: "error",
        msg: data.message,
      });
    }
  }
  useEffect(() => {
    if (result.status === "success") {
      setTimeout(() => {
        setResult({ status: "", msg: "" });
      }, 1000);
    }
  }, [result]);
  return (
    <>
      <div className="flex  flex-col mt-16 mb-4 items-center rounded-3xl overflow-hidden lg:mt-[7rem] lg:flex-row lg:justify-center">
        <div className="  sm:w-[35%] text-3xl bg-[rgb(2,179,210)]  text-white flex justify-center items-center md:text-4xl font-bold rounded-t-lg lg:h-[38rem] lg:rounded-l-lg lg:rounded-none lg:w-[35%]">
          Let&apos;s Chat !!
        </div>
        <div className="w-[90%] sm:w-[60%] pl-4 pt-6 h-[38rem] bg-white  pr-4 pb-0 rounded-lg lg:rounded-none lg:rounded-r-lg lg:w-[40%]">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleOnSubmit(e);
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                id="name"
                name="name"
                className="w-[100%] bg-gray-200 appearance-none border-2 border-gray-200 rounded sm:w-[80%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="abc@gmail.com"
                className="w-[100%] bg-gray-200 appearance-none border-2 border-gray-200 rounded sm:w-[80%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder=" Enter subject"
                className="w-[100%] bg-gray-200 appearance-none border-2 border-gray-200 rounded sm:w-[80%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message:
              </label>

              <textarea
                rows="10"
                cols="60"
                name="message"
                placeholder="Type your message...."
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              ></textarea>
            </div>
            <div className="flex justify-center mb-0">
              <button
                type="submit"
                className="bg-[rgb(2,179,210)] px-8  py-2 text-white rounded-sm  hover:bg-[rgb(4,111,129)]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      {result.status !== "" ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <span>{result.msg}</span>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Contact;
