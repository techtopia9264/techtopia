import Image from 'next/image'
import Banner from './home-components/Banner';
import MagicBlock from './home-components/MagicBlock';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center pt-14 justify-between">
      <Banner
        backgroundImage="https://images.unsplash.com/photo-1682407185504-5d3b24e07b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      >
        <MagicBlock>
          <Image 
            src="/earth.png"
            width={400}
            height={400}
            className='overflow-hidden rounded-full'
            style={{boxShadow:'10px -8px 16px #3da1d4'}}
          ></Image>
        </MagicBlock>
      </Banner>

      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
      <p>这里是首页</p>
    </main>
  )
}
