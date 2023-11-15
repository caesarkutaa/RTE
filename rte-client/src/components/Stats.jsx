import {React, useEffect, useState} from 'react';
import axios from "../API/axios";
const stats_URL = "/stats/";
import Cookies from "universal-cookie";
const cookies = new Cookies();


const Stats = () => {

    const [songStats, setsongStats] = useState()
    const [newsStats, setNewsStats] = useState()
    const [albumsStats, setAlbumsStats] = useState()
    const [musicVideoStats, setmusicVideoStats] = useState()

    const token = cookies.get("Token");
    const fetchSongStats = async () => {
        try {
            const response = await axios.get(`${stats_URL}songs`, 
                {
                  headers: {
                     Authorization: `Bearer ${token}`,
                     Accept: 'application/json', 
                  }
                }  
                );
                setsongStats(response?.data?.songs_count)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchNewsStats = async () => {
        try {
            const response = await axios.get(`${stats_URL}news`, 
                {
                  headers: {
                     Authorization: `Bearer ${token}`,
                     Accept: 'application/json', 
                  }
                }  
                );
                setNewsStats(response?.data?.news_count)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchAlbumsStats = async () => {
      try {
          const response = await axios.get(`${stats_URL}album`, 
              {
                headers: {
                   Authorization: `Bearer ${token}`,
                   Accept: 'application/json', 
                }
              }  
              );
              setAlbumsStats(response?.data?.album_count)

      } catch (error) {
          console.log(error)
      }
  }


  const fetchMusicVideoStats = async () => {
    try {
        const response = await axios.get(`${stats_URL}video`, 
            {
              headers: {
                 Authorization: `Bearer ${token}`,
                 Accept: 'application/json', 
              }
            }  
            );
            setmusicVideoStats(response?.data?.songWithvideos_count)

    } catch (error) {
        console.log(error)
    }
}

    useEffect(() => {
        fetchSongStats();
        fetchNewsStats();
        fetchAlbumsStats();
        fetchMusicVideoStats();
      }, []);
  return (
    <div>
        <section class="bg-blue-700 py-10 leading-6 text-gray-100 sm:py-16 lg:py-24">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
      <h2 class="text-3xl font-bold leading-9 sm:text-4xl sm:leading-tight">RTE DashBoard</h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4">
      <div class="relative overflow-hidden border-t-4 border-blue-500 bg-gray-600 shadow">
        <div class="px-6 py-10">
          <div class="flex items-center">
            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">{songStats}</h3>
            <span class="ml-3 text-base font-medium capitalize">Songs Uploaded</span>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden border-t-4 border-blue-500 bg-gray-600 shadow">
        <div class="px-6 py-10">
          <div class="flex items-center">
            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">{newsStats}</h3>
            <span class="ml-3 text-base font-medium capitalize">News Posted</span>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden border-t-4 border-blue-500 bg-gray-600 shadow">
        <div class="px-6 py-10">
          <div class="flex items-center">
            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">{albumsStats}</h3>
            <span class="ml-3 text-base font-medium capitalize">album posted</span>
          </div>
        </div>
      </div>
      <div class="relative overflow-hidden border-t-4 border-blue-500 bg-gray-600 shadow">
        <div class="px-6 py-10">
          <div class="flex items-center">
            <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">{musicVideoStats}</h3>
            <span class="ml-3 text-base font-medium capitalize">Music Video</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Stats