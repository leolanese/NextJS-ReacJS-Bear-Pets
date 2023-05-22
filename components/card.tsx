import Link from "next/link";
import Image from "next/image";

import React, { useReducer, useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'

export default function Card(props) {
  const { id, name, href, imgUrl } = props;
  const { state, dispatch } = useTheme();

  return (
    <>
        <Link href={{ pathname: `${props.href}/${id}`, query: { id, name, href, imgUrl } }}>
    
          <div className={ `flex space-x-4 rounded-md  border-indigo-900 ${state.theme}` }>
            <div className="w-36 h-36 rounded overflow-hidden shadow-lg">

              <Image
                className={`w-full h-2/3 object-cover`}
                src={props.imgUrl}
                width={220}
                height={180}
                alt={props.name}
              />

              <div className={`px-2 py-1 transition ease-in duration-700 ${state.theme}`}>
                <div className={`font-bold text-sm mb-1 truncate ${state.color}`}>Name: {props.name}</div>
                <p className={`text-gray-700 text-xs truncate ${state.color}`}>id: {props.id}</p>
              </div>

            </div>
          </div>  

        </Link>
    </>
  
  );
};