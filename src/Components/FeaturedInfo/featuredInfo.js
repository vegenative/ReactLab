import "./featuredinfo.css";

function FeaturedInfo()
{
    return (
    <div className="featuredInfo">FeaturedInfo
        <div className="featuredItem">
            <span className="featuredTitle">Sum up</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2415,51</span>
                <span className="featuredMoney"></span>
                <span className="featuredMoney">5%</span>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2415,51</span>
                <span className="featuredMoney"></span>
                <span className="featuredMoneyRate">5%</span>
            </div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2415,51</span>
                <span className="featuredMoney"></span>
                <span className="featuredMoney">5%</span>
            </div>
        </div>


    </div>

    )
}

export default FeaturedInfo;