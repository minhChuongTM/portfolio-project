import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { degreesReceived } from "@/portfolioData/PortfolioData";
import React from "react";
import { Link } from "react-router";

function Degrees() {
    const datas = degreesReceived;
    console.log(datas);
    return (
        <div className="pt-15">
            <h2 className="pb-6 text-center font-Fira-Sans text-4xl">{degreesReceived.title} DEMO</h2>
            {datas.data.map((item, i) => (
                <div key={i} className="grid md:grid-cols-12 gap-12 pt-6 text-xl">
                    <div className="col-span-2 flex items-center">
                        <div className="border-2 border-red-600 rounded-full hover:shadow-lg shadow-red-400/50 transition duration-300">
                            <img
                                src={new URL(`../../../assets/images/${item.image}`, import.meta.url).href}
                                alt="degree demo"
                                className="p-9"
                                width={"200px"}
                            />
                        </div>
                    </div>
                    <div className="col-span-10">
                        <Card className={"hover:shadow-lg hover:shadow-red-400/100 transition duration-300"}>
                            <CardHeader
                                className={"bg-red-500 flex justify-between items-center text-white p-4 leading-12"}
                            >
                                <div>
                                    <p className="text-2xl font-medium">{item.title1}</p>
                                    <p>{item.title2}</p>
                                </div>
                                <p>{item.year}</p>
                            </CardHeader>
                            <CardContent className={"leading-12"}>
                                <ul className="list-none">
                                    {item.descriptions.map((desrip, i) => (
                                        <li key={i}>{desrip}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className={"flex justify-end"}>
                                <Link className="bg-red-500 text-white p-4 rounded-2xl hover:bg-green-500 hover:shadow-lg shadow-red-300 transition duration-300">
                                    view wedsite
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Degrees;
