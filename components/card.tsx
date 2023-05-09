import Link from "next/link";
import Image from "next/image";

import styles from "./card.module.css";

const Card = (props) => {
  return (
    <Link href={props.href} className={styles.cardLink}>

      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">

        <Image
          className={`w-full h-64 object-cover`}
          src={props.imgUrl}
          width={260}
          height={160}
          alt={props.name}
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            This is a description of the card content. You can add anything you want here.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
        </div>
      </div>
      
    </Link>
  );
};

export default Card;
