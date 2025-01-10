const profileInfo = [
  { label: "Name", value: "Dipesh Kafle" },
  { label: "Nationality", value: "Nepali" },
  { label: "Phone No", value: "(+91) 9317128221" },
  { label: "Email", value: "abc@gmail.com" },
  { label: "Language", value: "Nepali, English, Hindi" },
  { label: "Freelance", value: "Available" },
  { label: "Hobbies", value: "Dancing, Watching movies" },
];

const ListDetails = () => {
  return (
    <>
      <div className="flex p-3 text-base  flex-wrap md:pl-0 md:py-4 md:flex-col md:h-56 gap-x-12 gap-y-5 md:text-[1.18rem] ">
        {profileInfo.map(({ label, value }) => {
          return (
            <div key={label} className="flex">
              <span className="text-[#908d8d] w-28 md:w-32">{label}</span>
              <span
                className={` ${
                  value === "Available" ? "text-[rgb(53,212,153)]" : ""
                }`}
              >
                : {value}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListDetails;
