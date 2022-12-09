import { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils/index";
import { Context } from "../Context";

function Photos() {
  const context = useContext(Context);
  const imageElem = context.allPhotos.map((item, index) => {
    return <Image key={item.id} img={item} className={getClass(index)} />;
  });

  return <main className="photos">{imageElem}</main>;
}

export default Photos;
