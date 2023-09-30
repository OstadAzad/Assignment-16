async function getData(){
    const res = await fetch (process.env.BASE_URL+"api/WorkList");
    if(!res.ok){
     throw new Error("HowWorks Calling Fail");
    }
    return res.json();
    }
const HowWorks = async () => {
    const data = await getData();
    return (
        <div>
            <section>
                <div className="skew skew-top mr-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                        <polygon fill="currentColor" points="0 0 10 10 0 10" />
                    </svg>
                </div>
                <div className="skew skew-top ml-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                        <polygon fill="currentColor" points="0 10 10 0 10 10" />
                    </svg>
                </div>
                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container mx-auto px-4">
                    <div className=" text-[16px] text-green-500 font-normal "><h4>Work List</h4></div> 
                        <div className="text-lg text-black-600 font-bold text-start mx-auto">
                            <h2 className="text-lg font-bold">
                            We Provide the Perfect Solution to <br/> Your Business Growth
                            </h2>
                        </div>
                        <div className="relative flex flex-wrap -mx-4 z-0">
                            <div className="mb-8 w-full lg:w-1/3 px-4 text-center"><br/>
                                <div><img src="design-assets/logo/design/Activity.png" height={80} width={60} flex/></div>
                                <h3 className="mb-4 text-2xl font-bold font-heading text-start">
                                    Grow Your Business
                                </h3>
                                <p className="text-black leading-loose text-start text-sm">
                                    We help identify the best ways to <br/> improve your business
                                </p><br/>
                                <p className="flex"> Learn More</p>
                                <div><img src="design-assets/logo/design/Vector.png" height={15} width={8} alt="Vector"/></div>
                            </div>
                            <div className="mb-8 w-full lg:w-1/3 px-4 text-center"><br/>
                            <div><img src="design-assets/logo/design/Heart.png" height={80} width={60} flex/></div>
                                <h3 className="mb-4 text-2xl font-bold font-heading text-start">
                                    Improve Brand Loyalty
                                </h3>
                                <p className="text-black leading-loose text-start text-sm">
                                    We help identify the best ways to <br/> improve your business
                                </p><br/>
                                <p className="flex"> Learn More</p>
                                <div><img src="design-assets/logo/design/Vector.png" height={15} width={8} alt="Vector"/></div>
                            </div>
                            <div className="w-full lg:w-1/3 px-4 text-center"><br/>
                            <div><img src="design-assets/logo/design/Work.png" height={80} width={60} flex/></div>
                                <h3 className="mb-4 text-2xl font-bold font-heading text-start">
                                    Improve Business Model
                                </h3>
                                <p className="text-black leading-loose text-start text-sm">
                                    We help identify the best ways to <br/> improve your business
                                </p><br/>
                                <p className="flex"> Learn More</p>
                                <div><img src="design-assets/logo/design/Vector.png" height={15} width={8} alt="Vector"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skew skew-bottom mr-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                        <polygon fill="currentColor" points="0 0 10 0 0 10" />
                    </svg>
                </div>
                <div className="skew skew-bottom ml-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                        <polygon fill="currentColor" points="0 0 10 0 10 10" />
                    </svg>
                </div>
            </section>
        </div>
    );
};
export default HowWorks;