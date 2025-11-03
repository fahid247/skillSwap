import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "../styles.css"
import { EffectCards } from 'swiper/modules';
import Card from './Card';
const skill1 ={
    "skillId": 1,
    "skillName": "Beginner Guitar Lessons",
    "providerName": "Alex Martin",
    "providerEmail": "alex@skillswap.com",
    "price": 20,
    "rating": 4.8,
    "slotsAvailable": 3,
    "description": "Acoustic guitar classes for complete beginners covering basic chords, strumming, and rhythm.",
    "image": "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    "category": "Music"
  }
  const skill2 ={
    "skillId": 11,
    "skillName": "Intro to Python Programming",
    "providerName": "Sophia Turner",
    "providerEmail": "sophia@skillswap.com",
    "price": 35,
    "rating": 4.9,
    "slotsAvailable": 3,
    "description": "Python basics including syntax, loops, conditionals, and small project creation.",
    "image": "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=500&q=80",
    "category": "Technology"
  }
  const skill3 ={
    "skillId": 3,
    "skillName": "Basic Web Development",
    "providerName": "David Chen",
    "providerEmail": "david@skillswap.com",
    "price": 30,
    "rating": 4.9,
    "slotsAvailable": 2,
    "description": "Learn HTML, CSS, and JavaScript to build your first interactive website from scratch.",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
    "category": "Technology"
  }
  const skill4 ={
    "skillId": 2,
    "skillName": "Spoken English Practice",
    "providerName": "Sara Hossain",
    "providerEmail": "sara@skillswap.com",
    "price": 10,
    "rating": 4.6,
    "slotsAvailable": 5,
    "description": "Conversational English sessions to improve fluency, pronunciation, and vocabulary.",
    "image": "https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=500&q=80",
    "category": "Language"
  }

export default function Slider() {
  return (
    
    <div id="app">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Card skill={skill1}></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card skill={skill2}></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card skill={skill3}></Card>
        </SwiperSlide>
        <SwiperSlide>
            <Card skill={skill4}></Card>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
