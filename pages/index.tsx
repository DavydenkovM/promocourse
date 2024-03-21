import { useRef } from "react";
// import { Swiper, SwiperSlide } from '../components/custom-swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



import Image from "next/image";
import cn from 'classnames';
import s from './index.module.scss'

interface ReviewCardProps {
  videoUrl?: string;
  clientTitle?: string;
  clientJob?: string;
  reviewText?: string,
}

const Subscribe = () => {
  return (
    <div className="flex justify-center text-white text-3xl">
      <a href="https://wa.me/79299055672" className={s['subscribe-btn']}>Записаться на консультацию</a>
    </div>
  )
}

const ReviewCard = ({ 
  videoUrl,
  clientTitle,
  clientJob,
  reviewText,
}: ReviewCardProps) => {
  return (
    <div className={cn(s['testimonial-item'], 'lazy relative shrink-0 overflow-hidden rounded-2xl border border-white border-opacity-10')}>
      <div className="block cursor-pointer rounded-2xl loaded">
        <div className="relative">
          {/* <iframe
            width="100%"
            className="w-full aspect-video"
            // height="720" 
            src="https://www.youtube.com/embed/lN2i8cQ9l_M?si=oQ6mRMzh7kfXvdsF"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          /> */}
          <iframe 
            // width="426" 
            // height="757" 
            width="100%"
            className="w-full aspect-[426/757] relative z-20"
            // className="w-full aspect-[526/757]"
            // src="https://www.youtube.com/embed/71Dce8vzhw8" 
            src={videoUrl}
            title="Как понять, что вы достойны ОЧЕНЬ БОЛЬШИХ ДЕНЕГ #shorts #trends" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            // allowfullscreen
            allowFullScreen
          />
          <div role="status" className="flex items-center justify-center w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 z-10 absolute inset-0">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <div className={cn( "flex flex-col p-4")}>
        <div className="flex items-center">
          <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
          <div>
            <div  className="text-sky-500">
              {clientTitle}
            </div>
            <div className="text-xs text-slate-400">
              {clientJob}
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden text-sm">
          <div className="text-slate-700 h-28 pt-2 text-ellipsis overflow-hidden text-clip">
              {reviewText}
          </div>
          <a href="" className="mt-2.5 text-sky-700 font-semibold">
            Читать подробнее...
          </a>
        </div>
      </div>

    </div>
);
}

const Testimonials = () => {
  const testimonials = [
    {
      videoUrl: 'https://www.youtube.com/embed/71Dce8vzhw8',
      clientTitle: 'Маша Иванова',
      clientJob: 'Мама 10-х детей',
      reviewText: 'Провели с Евгенией 5 сессий. Осталась очень довольна, смогла разрешить свой запрос. Решились с мужем на 11-го ребенка',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/DhF9oW5uvCI',
      clientTitle: 'Илон Маск',
      clientJob: 'Купил Твиттер',
      reviewText: 'Очень доволен, после терапии c Евгенией мои акции взлетели на 146 процентов',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/Tnxx_YDEuZM',
      clientTitle: 'Александр Меньшиков',
      clientJob: 'Профессиональный фотограф',
      reviewText: 'Эмоции через край! Был у других психологов, но только с Женей смог исцелить старую травму. Проверка того как работают очень длинные отзывы, если текст не умещается можно скрывать и открывать в отдельном окошке',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/QqqMMcvLokk',
      clientTitle: 'Василий Михайлович',
      clientJob: 'Эстрадный певец',
      reviewText: 'Я перестал бояться выступать на публике. Спасибо Жене что помогла мне в работе со страхом...',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/71Dce8vzhw8',
      clientTitle: 'Маша Иванова',
      clientJob: 'Мама 10-х детей',
      reviewText: 'Провели с Евгенией 5 сессий. Осталась очень довольна, смогла разрешить свой запрос. Решились с мужем на 11-го ребенка',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/DhF9oW5uvCI',
      clientTitle: 'Илон Маск',
      clientJob: 'Купил Твиттер',
      reviewText: 'Очень доволен, после терапии c Евгенией мои акции взлетели на 146 процентов',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/Tnxx_YDEuZM',
      clientTitle: 'Александр Меньшиков',
      clientJob: 'Профессиональный фотограф',
      reviewText: 'Эмоции через край! Был у других психологов, но только с Женей смог исцелить старую травму. Проверка того как работают очень длинные отзывы, если текст не умещается можно скрывать и открывать в отдельном окошке',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/QqqMMcvLokk',
      clientTitle: 'Василий Михайлович',
      clientJob: 'Эстрадный певец',
      reviewText: 'Я перестал бояться выступать на публике. Спасибо Жене что помогла мне в работе со страхом...',
    }
  ];

  return (
    <div className={cn(s['testimonials'], 'custom-scrollbars -mb-4 flex items-center space-x-4 pb-4 w-full')}>
        <Swiper 
        // virtual 
        // navigation
          roundLengths
          loop
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          spaceBetween={5}
          // centeredSlides
          // centeredSlidesBounds
          // Responsive breakpoints
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 5
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 1
            },
            // when window width is >= 640px
            960: {
              slidesPerView: 3,
              spaceBetween: 1
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 1,
            }
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <>
          {
            testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.videoUrl}>
                <ReviewCard 
                  videoUrl={testimonial.videoUrl} 
                  clientJob={testimonial.clientJob}
                  clientTitle={testimonial.clientTitle}
                  reviewText={testimonial.reviewText}
                />
              </SwiperSlide>
            ))
          }
          </>

          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>

          <SwiperSlide>Тут прекрасный длинный текст! Женя лучше всех !!!!!!!!</SwiperSlide>
          <SwiperSlide>Трудно описать мой восторг</SwiperSlide>
          <SwiperSlide>Slide 1000</SwiperSlide>
        </Swiper>
    </div>
  );
};

export default function Home() {
  return (
    <main className={cn(s['main'])}>
      <div className={s['main-menu']}>
        1
      </div>
      <div className={cn(s['content'])}>
        <div className={cn('menu')}>
          {/* <div>
            Обо мне
          </div>
          <div>
            Мой метод
          </div>
          <div>
            Отзывы
          </div>
          <div>
            Связаться со мной
          </div> */}
        </div>

        <div className="flex gap-20 w-full">
          <div className={s['evgenia']}>
            <Image
              alt=""
              src="/Evgenia.jpg"
              className="lazy"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '40px',
              }}
              width={600}
              height={600}
            />
          </div>
          <div>
            <div className="text-white text-2xl font-semibold italic">
              Дорогой гость, приветствую тебя в моем пространстве! &#x1F49B;	
            </div>
            <div className="text-white text-2xl font-semibold pt-6">
              Я Евгения, специалист по работе с подсознанием, психолог и проводник. 
            </div>

            <ul className={cn(s['my-features-list'], "text-white text-2xl font-semibold")}>
              <li className="py-3">&#x1F499; <span className="pl-6">Исцеляю людей без таблеток и затяжной психотерапии</span></li>
              <li className="py-3">&#x270D; <span className="pl-6">Знаю все о выходе из кризисов на своем опыте</span></li>
              <li className="py-3">&#x1F989; <span className="pl-6">Индивидуальный подход к каждому клиенту</span></li>
              <li className="py-3">&#x1F33F; <span className="pl-6">Обучаю инструментам самопомощи</span></li>
              <li className="py-3">&#x23F0; <span className="pl-6">Быстрый эффект и доступные цены</span></li>
            </ul>

          </div>
        </div>

        <Subscribe />

        <div className="pt-4" />

        <div className="flex items-center justify-center w-full">
          <div className="text-white text-4xl font-semibold">
            Клиенты о работе со мной
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <Testimonials />
        </div>

        <Subscribe />
      </div>
    </main>
  );
}