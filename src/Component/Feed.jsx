import React, { useEffect, useState } from 'react'
import vidamuyarchi from '../assets/vp.jpg'
import dragon from '../assets/drogon.jpg'
import { Link } from 'react-router-dom'
import parithabangal from '../assets/parithabangal.avif'
import Vj from '../assets/Vjsiddhu.avif'
import vc from '../assets/villagecooking.avif'
import zoo from '../assets/zoo.avif'
import jailer from '../assets/jailer.avif'
import football from '../assets/football.avif'
import amaran from '../assets/amaran.avif'
import './Feed.css'
import { API_key } from '../data'
import {value_converter} from '../data'
import moment from 'moment';




const Feed = ({category}) => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_key}`;
        await fetch(videoList_url).then(response => response.json()).then(data =>setData(data.items))
    }
    useEffect(() => {
        fetchData();

    }, [category])
    return (
        <div className='feed'>
            {data.map((item, index) => {
                return (
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h3>{item.snippet.title}</h3>
                <h4>{item.snippet.channelTitle}</h4>
                <p>{value_converter(item.statistics.viewCount) } views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>
                )
            })}
        </div>
    )
}

export default Feed
