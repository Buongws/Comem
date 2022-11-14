import React from "react";
import { banderAbout, hoa1, hoa3, hoa4, hoa5 } from "../assets/image/indexSlide";
import PageHero from "../components/Hero/PageHero";
const AboutPage = () => {
  return (
    <article className=" pb-[65px]">
      <PageHero title=" Giới Thiệu" />
      <div className="about-us-head">
        <div className="about-text container-small max-md:max-w-[100%] ">
          <h3 className="font-semibold text-[#4c503d]">
            CHUYỆN CỦA <span className="text-[#738136] font-bold">CỎ</span>
          </h3>
          <p className="text-[18px] leading-[29px] text-[#4c503d] pt-[20px] pb-[50px]  ">
            Khi quyết định xét nghiệm máu để làm tầm soát ung thư sớm, tôi nhận thức được rằng thế
            giới này không còn là nơi an toàn để sống. Chúng ta đang thực sự ở trong một cuộc chiến
            với rác thải và hoá chất độc hại - từng ngày, từng giờ - không súng đạn nhưng đầy thương
            vong!
          </p>
        </div>
        <div className="about-image pr-[10px] pl-[10px]">
          <div className="flex items-center justify-center">
            <img src={banderAbout} alt="chuyencuaco" />
          </div>
        </div>
      </div>
      <div className="about-content relative">
        <div className="content-about mb-[25px] ">
          <div className="container-small max-md:max-w-[100%] ">
            <div className="description">
              <blockquote className="text-[gray] font-playfair italic text-[36px] mb-[40px] pt-[40px] text-left">
                " Để nói về Cỏ Mềm, có 2 từ
                <b className="text-[#738136]"> Lành & Thật</b>
                <br />
                Để nói về mình, tôi mong được 2 chữ
                <b> Yêu đời "</b>
              </blockquote>
              <p className="text-[#345] text-[18px] ">
                Chúng ta đều cổ động đấu tranh bảo vệ môi trường, tìm hiểu về Hiệu ứng nhà kính, ô
                nhiễm Hạt nhân mà không biết mỗi hành động vô tư hàng ngày phục vụ cuộc sống cá nhân
                và gia đình đều đang tác động trực tiếp đến Trái đất. Mỗi ngày, để làm sạch bát đĩa
                quần áo bẩn, chúng ta sử dụng hàng tấn xà phòng nước rửa bát chứa đầy chất hoạt động
                bề mặt, chất tạo bọt, chất bảo quản, hương liệu độc hại. Sữa tắm, sữa rửa mặt, dầu
                gội, dầu xả cho tóc mượt, da mềm chứa đầy silicon không phân huỷ, mỹ phẩm chứa đầy
                hạt vi nhựa tẩy tế bào chết… Riêng khối lượng hạt vi nhựa tiêu thụ ở EU năm 2013 là
                299 triệu tấn (UNEF). Những hoá chất và phụ gia độc hại này nếu chưa thấm trực tiếp
                vào da thì sẽ bị thải xuống cống, rồi trôi ra sông hồ, ra biển, không tự phân huỷ
                được. Chúng sẽ ngấm xuống mạch nước ngầm hoặc được ăn bởi những động vật thuỷ sinh,
                cá tôm theo chuỗi thức ăn lại quay về với con người…
              </p>
            </div>
          </div>
        </div>
        <div className="content-about mb-[25px] top-[20%] left-0 z-[-1] absolute max-md:w-[200px]">
          <img src={hoa1} alt="hoa1" />
        </div>
        <div className="content-about mb-[25px]">
          <div className="container-small max-md:max-w-[100%]">
            <div className="about-text-2  ">
              <p className="text-[#345] text-[18px] mb-[30px]">
                Những năm 60, bà tôi giặt quần áo bằng bồ hòn, gội đầu bằng bồ kết, rửa bát bằng xơ
                mướp, dưỡng da bằng nước gạo. Những năm 80, mẹ tôi giặt quần áo bằng xà phòng cục,
                tắm bằng xà phòng cục – xà phòng làm từ dầu dừa và mỡ lợn. Và tôi - những năm 2000,
                bắt đầu dùng bột giặt trắng sáng, nước xả vải mềm bông, gel rửa bát đậm đặc, sữa tắm
                dưỡng thể, dầu gội siêu mượt, kem dưỡng da, sữa rửa mặt, keo xịt tóc... 5 năm trước,
                tôi đã không còn đếm được trong nhà có bao nhiêu thứ hoá mỹ phẩm công nghiệp, phục
                vụ – hay đúng hơn là xoi mói đến từng nhu cầu nhỏ tí teo thầm kín của con người để
                kiếm tiền: nước tẩy bếp ga, bình xịt kính, gel rửa tay khô, bọt cạo râu, dầu
                massage, nến thơm, xà phòng diệt khuẩn…
              </p>
              <div className="p-[30px] bg-[#f8faf2] rounded-[20px] bg-gradient-to-r from-[#f8faf2] to-[#fff]">
                <img src={hoa3} alt="hoa3" className="w-[100%]" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-about mb-[25px]">
          <div className="container-medium ">
            <img src={hoa4} alt="hoa4" className="w-[100%]" />
          </div>
          <div className="container-small max-md:max-w-[100%]">
            <p className="text-[#345] text-[18px] ">
              Cho đến khi tôi sực tỉnh, rằng nếu mình định làm điều gì đó tốt đẹp cho cuộc đời này,
              chắc chắn phải bắt đầu ngay từ những thứ nhỏ bé. Tôi bắt đầu Ước mơ Xanh của mình,
              nghiên cứu những sản phẩm thuần tuý, tối giản, chỉ tập trung vào Mục đích sử dụng của
              chính nó. Nghĩa là nước giặt thì chỉ cần giặt sạch, chứ không cần phải nhiều bọt.
              Nghĩa là dưỡng da dưỡng tóc thì để da tóc khoẻ từ gốc chứ không cần cảm giác giả mướt
              tay từ silicon. Tôi từ chối mọi sản phẩm chứa hạt vi nhựa, chỉ dùng cafe xay mịn và
              muối biển để tẩy tế bào chết. Tôi không dùng những hoá chất tẩy rửa mà thay bằng xà
              bông dầu dừa và quả bồ hòn xưa cũ…
            </p>
          </div>
        </div>
        <div className="content-about mb-[25px] absolute right-[0] bottom-[-90px] z-[-1] max-md:w-[200px]">
          <img src={hoa5} alt="hoa5" />
        </div>
      </div>
    </article>
  );
};

export default AboutPage;
