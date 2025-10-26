import GreetingCp from "@/components/ContentComponents/GreetingCp";

function Home() {
    const textColor = "text-gray-700 dark:text-gray-300";
    // console.log(textColor);
    return (
        <div className="">
            <GreetingCp textColor={textColor} />
        </div>
    );
}

export default Home;
