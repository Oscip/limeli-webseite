import ImageGallery from '../Components/ImageGallery.jsx';
import LimeliVideo from "../assets/Videos/LimeliVideo.mp4";

const AboutUs = () => {
    return (
        <div className="blog-page">
            <section className="about-us-section">
                {/* About Us Card */}
                <div className="limeli-card">
                    <h1 className="limeli-h2">About Limeli</h1>
                    <p className="limeli-p">
                        Welcome to Limeli, the pioneer in creating delicious, all-natural beverages that are made to refresh and rejuvenate.
                        Our story began with a simple mission: to provide healthier and sustainable drink options, without compromising on taste.
                        We believe in nature's power and its ability to deliver the most authentic flavors, using only the finest ingredients in our drinks.
                    </p>
                    <p className="limeli-p">
                        Limeli is not just about drinks; it's about creating experiences, bringing people together, and celebrating life’s best moments with every sip.
                        From our **Cinnamon** to **Mint** and **Limited Original** drinks, we offer a variety of beverages that cater to everyone’s taste. All our drinks are made with 100% natural ingredients, with no preservatives or artificial additives.
                    </p>
                </div>

                {/* What Makes Us Special Card */}
                <div className="limeli-card">
                    <h3 className="limeli-h3">What Makes Us Special</h3>
                    <p className="limeli-p">
                        At Limeli, we are constantly working towards improving not only our drinks but also the way we interact with the world. We’ve always believed that a company is only as good as the impact it has on people and the planet. That's why we're committed to sustainable practices—from sourcing ingredients to packaging.
                    </p>
                    <p className="limeli-p">
                        Recently, we signed a **five-year contract** with Swiss farmers from the Alpine region, ensuring we have access to the highest quality organic apples and herbs for our drinks. This partnership enables us to support local communities while improving the taste and sustainability of our products.
                    </p>
                    <p className="limeli-p">
                        In addition, we’ve improved our production process by introducing cutting-edge technologies that reduce our environmental footprint and increase the efficiency of our manufacturing. Limeli is now proud to offer fully recyclable bottles and has made the switch to plant-based plastic alternatives wherever possible.
                    </p>
                </div>

                {/* Our Products and What's New Card */}
                <div className="limeli-card">
                    <h3 className="limeli-h3">Our Products and What’s New</h3>
                    <p className="limeli-p">
                        Our product lineup has expanded this year! Alongside our famous **Original** (Limited) and refreshing **Mint**, we are now introducing a seasonal drink made with a blend of **Citrus & Elderflower**. This limited-edition beverage will be available exclusively through our online shop, and it’s packed with fresh, zesty flavors perfect for a summer day.
                    </p>
                    <p className="limeli-p">
                        We’ve also taken huge strides in improving the flavors of our drinks. After conducting extensive customer feedback surveys, we have fine-tuned our recipes. The new **Cinnamon** drink now features a smoother, richer taste with a hint of vanilla for extra warmth. It’s perfect for cozy evenings!
                    </p>
                </div>

                {/* Our Commitment to You Card */}
                <div className="limeli-card">
                    <h3 className="limeli-h3">Our Commitment to You</h3>
                    <p className="limeli-p">
                        At Limeli, we see each customer as part of the Limeli family. We are constantly striving to improve and evolve based on your feedback. As part of our new customer initiative, we are launching a subscription service in the coming months, offering exclusive discounts, early access to limited-edition flavors, and a more personalized shopping experience.
                    </p>
                    <p className="limeli-p">
                        We believe in transparency, and that’s why we ensure that you know where every ingredient in our drinks comes from. We’re proud to say that all our ingredients are sourced ethically, and we offer detailed information on each product’s packaging.
                    </p>
                    <p className="limeli-p">
                        In addition to our drink production, we have recently made an exciting leap into creating a **"Limeli Lifestyle"** line. This includes eco-friendly merchandise such as stainless steel straws, reusable drink bottles, and organic cotton bags—all designed with the same focus on sustainability and style.
                    </p>
                </div>

                {/* Looking Ahead Card */}
                <div className="limeli-card">
                    <h3 className="limeli-h3">Looking Ahead</h3>
                    <p className="limeli-p">
                        The future looks bright for Limeli! We are planning to expand internationally and introduce Limeli to new markets in Europe, Asia, and North America. We’ve already begun talking to potential distributors in Italy and Germany, and we’re excited about bringing our unique, healthy beverages to these new regions.
                    </p>
                    <p className="limeli-p">
                        But no matter where we go, Limeli will always stay true to its roots: natural ingredients, delicious flavors, and a commitment to sustainability. We’re continuously exploring new ideas, such as the launch of a **"Limeli Experience"** tasting room, where customers can come in and sample our drinks while learning about the process behind our creations.
                    </p>
                </div>

                {/* Partnerships Card */}
                <div className="limeli-card">
                    <h3 className="limeli-h3">Our Partnerships</h3>
                    <p className="limeli-p">
                        This year, Limeli has teamed up with several other like-minded companies to create unique collaborations. One of the most exciting is our partnership with **“Green Glow”**, a leading health and wellness brand. Together, we’ve created a special limited-edition drink combining Limeli’s signature taste with Green Glow’s herbal infusions.
                    </p>
                    <p className="limeli-p">
                        We’ve also secured a partnership with the renowned **“Forest Retreats”** to offer exclusive Limeli drinks at their luxury eco-resorts in the Swiss Alps. Guests will be able to enjoy our natural beverages while taking in the stunning views and fresh alpine air.
                    </p>
                </div>

                {/* Employee Wellness Card */}
                <div className="limeli-card">
                    <h3 className="limeli-h3">Growing and Evolving</h3>
                    <p className="limeli-p">
                        As Limeli continues to grow, we’re making it a priority to improve the wellness of both our team and our community. We’ve introduced new employee wellness programs, including weekly yoga sessions and health check-ups. We firmly believe that a happy, healthy team is key to producing the best drinks.
                    </p>
                    <p className="limeli-p">
                        Internally, we’re also working on **diversifying** our team and building a more inclusive work culture. Diversity has always been a core value of Limeli, and as we expand, we’re striving to ensure everyone feels valued and included in our journey.
                    </p>
                </div>
            </section>
            <section>
                <div className="limeli-card-video video-spacing">
                    <video className="video-player" autoPlay loop muted>
                        <source src={LimeliVideo} type="video/mp4"/>
                    </video>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
            <h2>Bilder Galerie</h2>
                <ImageGallery />
            </section>
        </div>
    );
};

export default AboutUs;
