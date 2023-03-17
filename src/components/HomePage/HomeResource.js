import React from "react";
import { source1, source2, source3, source4 } from "../../assets/image/indexSlide";
import { Link } from "react-router-dom";

const HomeResource = () => {
  return (
    <div className="container pt-[60px] pb-[60px]">
      <div className="resource-text text-center pb-[60px]">
        <h2 className="mb-[30px] font-semibold text-[#4c503d]">100% Minh bạch nguyên liệu</h2>
        <p> Sản phẩm LÀNH - Chất lượng THẬT</p>
        <Link to="/about" type="btn" className="btnResource mt-[20px] hover:text-white">
          XEM THÊM
        </Link>
      </div>
      <div className="resource-items grid gap-[24px] grid-cols-4 m-auto text-white max-lg:grid-cols-2 max-lg:gap-[40px] max-sm:grid-cols-1 ">
        <div className="resource-grid-top flex flex-col bg-[#66883f] rounded-[20px] p-[20px]">
          <div className="resource-img  h-[200px] mt-[-75px] max-lg:mt-[0px] ">
            <img src={source1} alt="source" className="bg-cover h-full w-full object-contain" />
          </div>
          <div className="resource-text text-[15.5px] p-[10px] flex-1 flex flex-col justify-between text-center ">
            <h3 className="text-white font-medium mb-[15px] mt-[15px] cursor-pointer title-resource">
              Lá Bạc Hà
            </h3>
            <p className="m-auto text-white">
              Lá Bạc hà được sử dụng trong các sản phẩm mỹ phẩm như: cao dược liệu để gội đầu, lá
              tắm cho trẻ em, nước súc miệng...
            </p>
          </div>
        </div>

        <div className="resource-grid-bottom  flex flex-col-reverse bg-[orange]  rounded-[20px] p-[20px]">
          <div className="resource-img  h-[200px] mb-[-55px] max-lg:mb-[0px] ">
            <img src={source2} alt="source" className="bg-cover h-full w-full object-contain" />
          </div>
          <div className="resource-text text-[15.5px] p-[10px] flex-1 flex flex-col justify-between text-center ">
            <h3 className="text-white font-medium mb-[15px] mt-[15px] cursor-pointer title-resource">
              Tinh dầu Cam Ngọt
            </h3>
            <p className="m-auto text-white">
              Tinh dầu Cam ngọt được sử dụng trong mỹ phẩm như một thành phần làm thơm, giải tỏa
              căng thẳng: sáp thơm, tinh dầu treo, kem dưỡng...
            </p>
          </div>
        </div>

        <div className="resource-grid-top flex flex-col bg-[#9db360] rounded-[20px] p-[20px]">
          <div className="resource-img h-[200px] mt-[-75px] max-lg:mt-[0px]">
            <img src={source3} alt="source" className="bg-cover h-full w-full object-contain" />
          </div>
          <div className="resource-text text-[15.5px] p-[10px] flex-1 flex flex-col justify-between text-center">
            <h3 className="text-white font-medium mb-[15px] mt-[15px] cursor-pointer title-resource">
              Dầu Quả Bơ
            </h3>
            <p className="m-auto text-white">
              Được chiết từ thịt quả bơ chín ngay sau khi thu hoạch bằng phương pháp ép lạnh, phương
              pháp này giữ được nguyên dinh dưỡng tốt trong dầu.
            </p>
          </div>
        </div>

        <div className="resource-grid-bottom flex flex-col-reverse bg-[#66883f]  rounded-[20px] p-[20px]">
          <div className="resource-img  h-[200px] mb-[-55px] max-lg:mb-[0px]">
            <img src={source4} alt="source" className="bg-cover h-full w-full object-contain" />
          </div>
          <div className="resource-text text-[15.5px] p-[10px] flex-1 flex flex-col justify-between text-center">
            <h3 className="text-white font-medium mb-[15px] mt-[15px] cursor-pointer title-resource">
              Dầu Dừa
            </h3>
            <p className="m-auto text-white">
              Dầu dừa được chiết xuất từ phần cùi trắng của quả dừa, có thể được tìm thấy trong
              nhiều loại mỹ phẩm và sản phẩm chăm sóc cá nhân.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeResource;
