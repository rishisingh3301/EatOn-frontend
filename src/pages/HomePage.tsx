import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Feast Without the Fuss!
                </h1>
                <span className="text-xl">Click in for flavor!</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Elevate your dining experience!
                    </span>
                    <span>
                        Grab the EatOn App today for lightning-fast orders and personalized picks!
                    </span>
                    <img src={appDownloadImage} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;