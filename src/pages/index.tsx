import Head from 'next/head'
import FlipCard from "@/components/FlipCard";
import useSWR from "swr";
import {api} from "@/api";
import s from './index.module.css'
import Button from "@/components/Button";

export default function Index() {

    const {data} = useSWR('bgm-cal', async () => {
            const resp = await api.calendar.getCalendar()
            return resp.data
        }
    )

    function getChineseDayOfWeek(day: number): string {
        // 定义一个数组，包含星期一至星期日的中文名称
        const daysInChinese = ['一', '二', '三', '四', '五', '六', '日'];

        // 检查输入是否在1-7范围内
        if (day >= 1 && day <= 7) {
            return `星期${daysInChinese[day - 1]}`;
        } else {
            return '输入无效';  // 返回这个字符串作为无效输入的标识
        }
    }

    function getColorByRating(rating: number): string {
        // 9-10：极好
        if (rating >= 9 && rating <= 10) {
            return '#1B813E';
        }
        // 8-9：好
        else if (rating >= 8 && rating < 9) {
            return '#7BA23F';
        }
        // 7-8：不错
        else if (rating >= 7 && rating < 8) {
            return '#ADA142';
        }
        // 5-7：一般
        else if (rating >= 5 && rating < 7) {
            return '#ED784A';
        }
        // 0-5：垃圾
        else if (rating >= 0 && rating < 5) {
            return '#C73E3A';
        }
        // 无效评分
        else {
            return '#FFFFFF'; // 返回白色作为无效评分
        }
    }

    const RECOMMEND_LINE = 7.5;

    const days = data?.map(weekday => {

        const animes = weekday?.items?.map(anime => {

            const colorUp = (anime?.rating?.score ?? 0) >= RECOMMEND_LINE ? '#24936E' : undefined
            const colorDn = (anime?.rating?.score ?? 0) >= RECOMMEND_LINE ? 'rgba(36,147,110,0.2)' : undefined

            const front = <div className={s.anime}>
                <img alt={'img'} className={s.img} src={anime.images?.common}/>
                <div className={s.info1}>
                    <div className={s.info1c}
                         style={{borderBottom: '1px dashed rgba(255,255,255,0.8)'}}>{getChineseDayOfWeek(anime.air_weekday ?? 0)}</div>
                    <div className={s.info1c}>{anime.air_date}</div>
                    <div className={s.info1c}
                         style={{backgroundColor: getColorByRating(anime.rating?.score ?? -1)}}>{anime.rating?.score}</div>
                </div>
                <div className={s.info2}>
                    <div className={s.info2cu} style={{backgroundColor: colorUp}}>{anime.name}</div>
                    <div className={s.info2cd} style={{backgroundColor: colorDn}}>{anime.name_cn}</div>
                </div>
            </div>

            const back = <div className={s.anime}
                              style={{backgroundColor: colorUp ?? '#FAD689', flexDirection: 'column'}}>
                <div className={s.info1cb}>
                    {anime.name}
                </div>
                <div className={s.info1cbd}>
                    <a href={anime.url} target={'_blank'}>
                        <Button onClick={() => {
                        }}>Bangumi</Button>
                    </a>
                    <a href={`https://mikanani.me/Home/Search?searchstr=${anime.name_cn !== '' ? anime.name_cn : anime.name}`}
                       target={'_blank'}>
                        <Button onClick={() => {
                        }}>Mikan</Button>
                    </a>
                </div>
            </div>

            return <FlipCard front={front} back={back}/>
        })

        return <div className={s.day}>
            <div className={s.dayText}>{weekday?.weekday?.cn}</div>
            <div className={s.animes}>
                {animes}
            </div>
        </div>
    })

    return (
        <>
            <Head>
                <title>{`ICEDN-ACG`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                {days}
            </main>
        </>
    )
}
