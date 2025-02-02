import React from 'react'
import Banner from '../components/Banner'
import AnyComponent from '../components/AnyComponent'
import Customers from '../components/Customers'
import Marquee from '../components/Marquee'
import Design from '../components/Design'

const AnyBaas = () => {
    const items = [
        { title: 'Easy Card Issuance & Management', description: 'Issue and manage all types of payment cards, including debit, credit, prepaid, and virtual cards via a unified platform. Easily configure card rules, limits, and policies per your business needs.', img: "https://cdn.sanity.io/images/6jywt20u/production/3f726dd108ed3d3c117fd35c90ec92d76989223e-50x51.svg?w=50&auto=format" },
        { title: 'White-labelled Solutions', description: 'Our robust APIs ensure seamless integration with your existing infrastructure, enabling real-time data exchange and cross-platform compatibility.', img: 'https://cdn.sanity.io/images/6jywt20u/production/0d7e6faf925dd55d78fe41a3b748cf18cc25af19-50x50.svg?w=50&auto=format' },
        { title: 'Customisable Card Design', description: 'Leverage our platform to create unique card designs that reflect your brand identity.', img: "https://cdn.sanity.io/images/6jywt20u/production/76435e822c628c1335871524b894761c4534d372-50x50.svg?w=50&auto=format" },


        { title: 'Real-time Reporting & Analytics', description: 'Track and analyse card transactions in real-time with our intuitive dashboard and reporting features. Gain insights into customer spending patterns and card usage trends.', img: "https://cdn.sanity.io/images/6jywt20u/production/960e3f97b606caff0649e6af837f0ebf1108b06c-50x50.svg?w=50&auto=format" },
        { title: 'Fraud Detection & Prevention', description: 'Our advanced AI-driven fraud detection system monitors card transactions around the clock, providing instant alerts on suspicious activities and helping to prevent fraudulent transactions.', img: 'https://cdn.sanity.io/images/6jywt20u/production/73442d1702e6a83e9d5c5ff553e79c501a025719-50x50.svg?w=50&auto=format' },
        { title: 'Secure & Compliant', description: 'AnyTech adheres to the highest level of data security standards and is fully compliant with PCI DSS, GDPR, and other relevant regulations..', img: "https://cdn.sanity.io/images/6jywt20u/production/032db5256aa10d62b227c92c70734b11d16a1ea0-50x50.svg?w=50&auto=format" },
    ]



    const items2 = [
        { title: 'Speed to Market', description: 'Launch new card programmes with ease and enjoy a competitive advantage via a faster time-to-market.', img: "https://cdn.sanity.io/images/6jywt20u/production/1145f8181640917b7d142de2d1fc31d860ebc22f-50x50.svg?w=50&auto=format" },
        { title: 'Cost-effective', description: 'Eliminate the hefty upfront investments associated with traditional card issuance systems. Pay as you grow with our CaaS model, aligning costs with the scale of your operations.', img: 'https://cdn.sanity.io/images/6jywt20u/production/253c20e46eb0a8be5418d4a80968143e96ff7994-50x50.svg?w=50&auto=format' },
        { title: 'Scalability', description: 'AnyTech’s scalable architecture is built to support a constantly growing customer base and an evolving portfolio of products and services.', img: "https://cdn.sanity.io/images/6jywt20u/production/09def8db67d41777c5b9c853c0c8e2eecf70d390-50x50.svg?w=50&auto=format" },


        { title: 'Customer Experience', description: 'Stay ahead of the competition by leveraging our continuous innovation, from contactless cards to mobile wallet integrations.', img: "https://cdn.sanity.io/images/6jywt20u/production/6adbe70b6c524ea4ac82dc100d132bb9bd05fb53-50x50.svg?w=50&auto=format" },
        { title: 'Innovation', description: 'Our advanced AI-driven fraud detection system monitors card transactions around the clock, providing instant alerts on suspicious activities and helping to prevent fraudulent transactions.', img: 'https://cdn.sanity.io/images/6jywt20u/production/9e9111ffc5e17a40a2b5a806e2b7ae7c54565dae-50x50.svg?w=50&auto=format' },

    ]

    const images = {
        // miniImageOne: '',
        miniImageTwo: 'https://cdn.sanity.io/images/6jywt20u/production/72a2ced9b1b29bccc85bd237438e7f494cab0077-160x175.svg?w=320&auto=format',
        miniImagefive: 'https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format',
        imageFoure: "https://cdn.sanity.io/images/6jywt20u/production/e2c1f41cd22ab0afaab7d968a613e31a7e466d7c-375x455.png?w=375&auto=format"
    }
    const title = "AnyBaas"
    const desc1 = "The future of Bnking services"
    const desc2 = "Engineered to revolutionise the way large financial institutions operate and serve their customers, our Banking-as-a-Service (BaaS) solution redefines banking infrastructure.";
    const desc3 = "Designed by our expert team, AnyBaaS provides powerful infrastructure that allows banks to innovate, scale, and adapt in today's fast-paced digital environment."
    const desc4 = "AnyBaaS is more than just a platform—it's a strategic partner in your digital transformation journey. Embrace the future of banking with AnyTech and redefine what your institution can achieve in the digital age."


    const designItems = [
        {
            id: 1, title: 'Banking redesigned for innovation', desc: "Dive into the future of banking with our Banking-as-a-Service (BaaS) platform that gives you the tools you need to scale, innovate and adapt in today’s fast-paced digital environment.", img: "https://cdn.sanity.io/images/6jywt20u/production/61cb26a6b98fbeb6ef82e2d964b984838834d93e-229x39.svg?w=320&auto=format",

        },
        {
            id: 2, title: "High-velocity payment processing", desc: "Enhance your payment processing capabilities with our Payment-as-a-Service (PaaS) solution. Experience our agile, scalable and secure infrastructure that facilitates all types of transactions with ease.", img: "https://cdn.sanity.io/images/6jywt20u/production/9ffafb01cf5c215040fe652fd0e143b0e303d5e2-228x39.svg?w=320&auto=format",

        }
    ]

    const designTitle = "Solutions"
    const desgnDesc = "Designed for your needs";
    return (
        <div>
            <Banner />
            <Customers title={title} desc1={desc1} desc2={desc2} desc3={desc3}  images={images} desc4={desc4} />
            <AnyComponent title="Key Features" subtitle="Redefined for the digital age" items={items} />
            <AnyComponent title="Benefits" subtitle="Start your digital
transformation" items={items2} />
            <Marquee/>
            title, desc, items
            <Design title={designTitle} desc={desgnDesc} items={designItems} />
        </div>
    )
}

export default AnyBaas