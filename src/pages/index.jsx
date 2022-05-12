import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Fotter } from '../components/Fotter/Fotter'
import { Main } from '../components/Main/Main'
import { Header } from '../components/Header/Header'
import { useState,useCallback,useEffect } from 'react'

export default function Home() {
  const [foo, setFoo] = useState(1);
  const [count,setCount] = useState(40)
  const [text,setText] = useState()
  const [isShow,setIsShow] = useState(true)
  const [arry, setArry] =useState([])

  const handleClick = useCallback(() =>{
    if(foo < 20){
      setFoo((prevfoo)=>prevfoo+1);
    }
  },[foo])

  useEffect(()=>{
    return()=>{
      console.log(count);
    }
  },[foo,count])

  const handleChange = useCallback((e)=>{
    setText(e.target.value.trim())
  },[]);

  const handleDisplay = useCallback(()=>{
    setIsShow((previsShow) => {
      return !previsShow
    }
)
  },[])

  const handleAdd = useCallback(()=>{
    setArry((prevArry)=>{
      if(prevArry.some(item=> item === text)){
        alert("同じ要素が既に存在します。")
      }
      return [...prevArry, 1];
    })
  },[text])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header></Header>
      {isShow ? <h1>{foo}</h1> : null}
      <button onClick={handleClick}>ボタンですよ</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {arry.map((item)=>{
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <input type="text" value={text} onChange={handleChange}/>
      <Main page="index"/>
      <Fotter/>
    </div>
  )
}
