import CloudInfra from "@/components/ContentComponents/Home/CloudInfra";
import FullStackDev from "@/components/ContentComponents/Home/FullStackDev";
import GreetingCp from "@/components/ContentComponents/Home/GreetingCp";

function Home() {
    const textColor = "text-gray-700 dark:text-gray-300";
    // console.log(textColor);
    return (
        <div className="">
            <GreetingCp textColor={textColor} />
            <FullStackDev textColor={textColor} />
            <CloudInfra textColor={textColor} />
        </div>
    );
}

export default Home;
