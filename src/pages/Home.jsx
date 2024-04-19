import Images from '../assets/Images';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sectionBaseStyle = "py-16 px-4";
const sectionTitleStyle = "text-3xl font-bold text-white mb-4 text-center";
const sectionTextStyle = "text-lg text-white";
const sectionTextStyleItems = "text-lg text-primaryGray";

const NewsItem = ({ image, title, description, link }) => (
  <div className="bg-white shadow-md p-4 min-h-96">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} alt="news" className="w-full h-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={sectionTextStyleItems}>{description}</p>
    </a>
  </div>
);

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const newsData = [
    { image: Images.image4, title: 'Computer Vision', description: 'This is video full course I recommend for you learn.', link: 'https://www.youtube.com/watch?v=01sAkU_NvOY'},
    { image: Images.image9, title: 'Python Course', description: 'This is video full course I recommend for you learn.', link: 'https://www.youtube.com/watch?v=01sAkU_NvOY'},
    { image: Images.image12, title: 'JavaScript Course', description: 'This is video full course I recommend for you learn.', link: 'https://www.youtube.com/watch?v=01sAkU_NvOY'},
    { image: Images.image3, title: 'Daily News', description: 'This is video full course I recommend for you learn.', link: 'https://www.youtube.com/watch?v=01sAkU_NvOY'},
    { image: Images.image10, title: 'Model AI', description: 'This is video full course I recommend for you learn.', link: 'https://www.youtube.com/watch?v=01sAkU_NvOY'}
    // Add more news items as needed
  ];

  return (
    <section id="news" className={sectionBaseStyle}>
      <div className="w-full mx-auto my-auto">
        <h2 className={sectionTitleStyle}>News</h2>
        <Slider {...settings} className="w-4/5 mx-auto">
          {newsData.map((news, index) => (
            <NewsItem key={index} {...news} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const Section = ({ id, title, children, bgColor = '' }) => (
  <section id={id} className={`${sectionBaseStyle} ${bgColor}`}>
    <div className="max-w-4xl mx-auto text-center rounded-lg">
      <h2 className={sectionTitleStyle}>{title}</h2>
      <p className={sectionTextStyle}>{children}</p>
    </div>
  </section>
);

const Home = () => (
  <div className="min-h-screen bg-gradient-to-r from-primaryGreen to-secondaryGray text-zinc-700">
    <Section id="about" title="About Us">
      Đây là trang Web đánh giá code tự động sử dụng công nghệ của ChatGPT kết hợp người đánh giá do nhóm sinh viên K1 của trường Đại học CMC phát triển.
    </Section>
    <Section id="guide" title="Guide for Use" >
      Trang Web được thiết kế cho người dùng dễ dàng tiếp cận nhất với các tính năng cốt lõi. 
    </Section>
    <News />
    <Section id="contact" title="Contact" >
      Các bạn có thể liên hệ với chúng tôi qua Facebook: <a href='https://www.facebook.com/profile.php?id=100024296026068' target='_blank' className='hover:underline'>Tô Đức</a>
    </Section>
    <Section id="helps" title="Helps">
      Mọi vấn đề cần thông tin từ chúng tôi có thể gửi qua Email: toquangduc004@gmail.com
    </Section>
    <footer className="bg-slate-600 shadow-md">
      <div className="p-5 text-white">
        © 2024 Create by To Quang Duc - Hoang Minh Hai, CMC University.
      </div>
    </footer>
  </div>
);

export default Home;
