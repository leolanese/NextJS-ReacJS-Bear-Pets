import Link from "next/link";
import Image from "next/image";

import styles from "./Card.module.css";

const Card = (props) => {
  const { id, name, href, imgUrl } = props;

  return (
    <>
        <Link href={{ pathname: `${props.href}/${id}`, query: { id, name, href, imgUrl } }}>
    
          <div className="flex space-x-4">
            <div className="w-36 h-36 rounded overflow-hidden shadow-lg">

              <Image
                className={`w-full h-2/3 object-cover`}
                src={props.imgUrl}
                width={220}
                height={180}
                alt={props.name}
              />

              <div className="px-2 py-1">
                <div className="font-bold text-sm mb-1 truncate">Name: {props.name}</div>
                <p className="text-gray-700 text-xs truncate">id: {props.id}</p>
              </div>

            </div>
          </div>  

        </Link>
    </>
  
  );
};

export default Card;
