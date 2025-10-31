import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { certifications } from "@/portfolioData/PortfolioData";
import React from "react";

function Certifications() {
    const array = certifications;
    console.log(certifications);
    return (
        <div className={"text-center pt-16"}>
            <h2 className="font-Fira-Sans font-medium text-3xl">Certifications DEMO</h2>
            <div className="grid md:grid-cols-12 gap-6 pt-6">
                {array.map((item, i) => (
                    <div key={i} className="col-span-4">
                        <Card className={""}>
                            <div
                                style={{ backgroundColor: item.color_code }}
                                className="p-4 flex justify-center items-center"
                            >
                                <img
                                    src={new URL(`../../../assets/images/${item.logo_path}`, import.meta.url).href}
                                    alt={item.alt_name}
                                    style={{ height: "100px" }}
                                />
                            </div>
                            <CardContent className={"font-Fira-Sans text-xl"}>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
            <div></div>
        </div>
    );
}

export default Certifications;
