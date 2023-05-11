import Link from "next/link";
import Image from "next/image";

import styles from "./card.module.css";

const Card = (props) => {
  return (
    <>
        <Link href={props.href}>
    
          <div className="flex space-x-4">
            <div className="w-36 h-36 rounded overflow-hidden shadow-lg">

              <Image
                className={`w-full h-2/3 object-cover`}
                src={props.imgUrl}
                width={120}
                height={80}
                alt={props.name}
              />

              <div className="px-2 py-1">
                <div className="font-bold text-sm mb-1 truncate">{props.title}</div>
                <p className="text-gray-700 text-xs truncate">{props.email}</p>
              </div>

            </div>
          </div>  

        </Link>
    </>
  
  );
};

export default Card;
