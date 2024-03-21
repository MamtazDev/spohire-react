import NewsCard from "../../components/News/NewsCard";
import NewsHeader from "../../components/News/NewsHeader"
import './News.css';
import n1 from '../../assets/news/n1.png'
import n2 from '../../assets/news/n2.png'
import n4 from '../../assets/news/n4.png'

const newsData = [
    {
        img: n1,
        title: "Baku 2024 world best basketball Championships",
        date: "24",
        month: "JUN",
        time: "4 hours ago",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to book."
    },
    {
        img: n2,
        title: "Baku 2024 world best basketball Championships",
        date: "24",
        month: "JUN",
        time: "4 hours ago",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to book."
    },
    {
        img: n4,
        title: "Baku 2024 world best basketball Championships",
        date: "24",
        month: "JUN",
        time: "4 hours ago",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to book."
    },

]

const News = () => {
    return (
        <div className="container">
            <NewsHeader />
            {newsData.map((data) => (
                <>
                    <NewsCard data={data} />
                </>
            ))}
        </div>
    )
}

export default News